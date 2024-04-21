import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Reservation = () => {

  const [data, setData] = useState([]);
  // const { id } = useParams();
  const providerId = localStorage.getItem('id');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/providerreserve/${providerId}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    };
    fetchData();
  }, []);

  console.log('kkkk', data);

  const handleClick = async (id) => {
    try {
      let response = await axios.delete(`http://localhost:4000/deletereservation/${id}`);
      console.log('deleted', response);
      window.location.reload();
    } catch (error) {
      console.error('Error cancelling reservation');
    }
  }


  return (
    <>

      <section style={{ marginTop: '150px' }} className='reserve'>
        <div>
          <h1>Reservation Details</h1>
          <div className='table'>
            {data.length > 0 ? (
              <table>
                <tr>
                  <th>Sl No.</th>
                  <th>Area</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Duration</th>
                  <th>Slot No</th>
                  <th>Reserved By</th>
                  <th>Action</th>
                </tr>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.area}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.hours}</td>
                    <td>{item.slotno}</td>
                    <td>{item.userId ? item.userId.name : 'Unknown'}</td>
                    <td>
                      <a href="" onClick={()=>{handleClick(item._id)}}>Cancel</a>
                    </td>
                  </tr>
                ))}
              </table>

            ) : (
              <div>
                No reserved slots
              </div>
            )}
          </div>
        </div>
      </section>


    </>
  )
}

export default Reservation