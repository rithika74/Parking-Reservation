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
        </div>
        {/* <div className='table'>
            {data.length > 0 ? (
              <table>
                <tr>
                  <th>Sl No.</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Duration</th>
                  <th>Booked Slot</th>
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
                    <td><a href="">Cancel</a></td>
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
                  <th scope="col">Location</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Booked Slot</th>
                  <th scope="col">Reserved By</th>
                  <th scope="col">Action</th>
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
                    <td>{item.userId ? item.userId.name : 'Unknown'}</td>
                    <td><a href="">Cancel</a></td>
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

export default UserReservations