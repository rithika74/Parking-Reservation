import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Reservations = () => {

  const [data, setData] = useState([]);
  const { id } = useParams();
  const userId=localStorage.getItem('id');

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

  return (
    <>

      <section style={{ marginTop: '120px' }} className='reserve'>
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
                    <td>
                      <button>Update</button>
                      <button>Delete</button>
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

export default Reservations