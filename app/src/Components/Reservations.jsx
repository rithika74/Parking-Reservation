import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { url } from '../url';

const Reservations = () => {

  const [data, setData] = useState([]);
  const { id } = useParams();
  const userId = localStorage.getItem('id');
  const navigate = useNavigate();

  console.log('id:', id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/slot/${userId}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    };
    fetchData();
  }, [userId]);

  console.log('kkkk', data);

  const currentTime = new Date().toLocaleString();

  const compare = data.filter(reservation => {
    return (
      reservation.expireTime > currentTime
    );
  })

  console.log('compare',compare);

  const handleClick = async (id) => {
    try {
      let response = await axios.delete(`${url}/deletereservation/${id}`);
      console.log('deleted', response);
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error cancelling reservation:', error);
    }
  }

  useEffect(() => {
    compare.forEach(reservation => {
      handleClick(reservation._id);
    });
  }, [compare]);



  return (
    <>

      <section className='section'>
        {/* <div>
          <h1>Reservation Details</h1>
        </div> */}
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


        <div className='tablediv' >
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
                    <td>{item.totalcost}</td>
                    <td>
                      {/* <a href="" style={{ marginRight: '10px', color: 'green' }} onClick={() => navigate(`/userpage/update/${item._id}`)}>Update</a> */}
                      <a href="" onClick={() => { handleClick(item._id) }}>Cancel</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className=' text-center'>No reserved slots</div>
          )}
        </div>



      </section>


    </>
  )
}

export default Reservations


