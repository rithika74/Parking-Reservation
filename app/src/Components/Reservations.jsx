import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const Reservations = () => {

  const [data, setData] = useState([]);
  const { id } = useParams();
  const userId = localStorage.getItem('id');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/slots/${userId}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    };
    fetchData();
  }, [id]);

  console.log('kkkk', data);

  const handleClick = async () => {
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
        </div>
        {/* <div className='table'>
            {data.length > 0 ? (
              <table>
                <tr>
                  <th>Sl No.</th>
                  <th>Area</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Duration</th>
                  <th>Slot No</th>
                  <th>Total Cost</th>
                  <th>Actions</th>
                </tr>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.area}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.hours}</td>
                    <td>{item.slotno}</td>
                    <td>{item.totalcost}</td>
                    <td>
                      <a href="" style={{ marginRight: '10px', color: 'green' }} onClick={() => navigate(`/userpage/update/${item._id}`)}>Update</a>
                      <a href="" onClick={() => { handleClick(item._id) }}>Cancel</a>
                    </td>
                  </tr>
                ))}
              </table>

            ) : (
              <div>
                No reserved slots
              </div>
            )}
          </div> */}


        <div className='tablediv' style={{ width: '100%', marginTop: '20px' }}>
          {data.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Sl No.</th>
                  <th scope="col">Area</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Slot No</th>
                  <th scope="col">Total Cost</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.area}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.hours}</td>
                    <td>{item.slotno}</td>
                    <td>{item.totalcost}</td>
                    <td>
                      <a href="" style={{ marginRight: '10px', color: 'green' }} onClick={() => navigate(`/userpage/update/${item._id}`)}>Update</a>
                      <a href="" onClick={() => { handleClick(item._id) }}>Cancel</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>No reserved slots</div>
          )}
        </div>



      </section>


    </>
  )
}

export default Reservations