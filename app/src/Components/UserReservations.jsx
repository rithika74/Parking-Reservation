import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserReservations = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/reservations');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    };
    fetchData();
  }, []);

  console.log('kkkk', data);

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
                  <th>Name</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Duration</th>
                  <th>Booked Slot</th>
                </tr>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td></td>
                    <td>{item.area}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.hours}</td>
                    <td>{item.slotno}</td>
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

export default UserReservations