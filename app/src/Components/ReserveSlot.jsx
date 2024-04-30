import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const ReserveSlot = () => {
  const navigate = useNavigate()

  const [area, setArea] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      let response = await axios.get('http://localhost:4000/allarea')
      console.log(response.data);
      setArea(response.data)
    }
    fetchdata()
  }, [])

  console.log(area);
  console.log('provider', area.userId);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'date') {
      const formattedDate = value.split('-').reverse().join('-');
      setData({ ...data, [name]: formattedDate });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data.area && data.date && data.time && data.hours) {
      try {
        const selectedArea = area.find((item) => item.area === data.area);
        const userId = localStorage.getItem('id');
        const reserveData = {
          ...data,
          userId: userId,
          providerId: selectedArea.userId,
          areaId: selectedArea._id,
          totalcost: calculateCost(data.hours, selectedArea.cost),
          expireTime: calculateExpiration(data.date, data.time, data.hours)
        };
        console.log('reservationssss', reserveData);
        if (selectedArea) {

          const response = await axios.post('http://localhost:4000/reserve', reserveData);

          if (response.data) {
            setData('');
            console.log('success');
            navigate(`/userpage/slots/${selectedArea._id}/${response.data._id}`);
          }
        } else {
          alert('Selected area not found.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while processing your request.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  }

  const calculateCost = (hours, costPerHour) => {
    const parsedHours = parseInt(hours);
    const totalCost = parsedHours * costPerHour;
    return totalCost;
  };

  const calculateExpiration = (date, time, hours) => {
    const formattedDate = date.split('-').reverse().join('-');
    const dateTimeString = `${formattedDate}T${time}:00`;
    const dateTime = new Date(dateTimeString);
    if (isNaN(dateTime.getTime())) {
      console.error('Invalid date or time:', dateTimeString);
      return null;
    }
    const expirationTime = new Date(dateTime.getTime() + (parseInt(hours) * 60 * 60 * 1000));
    return expirationTime.toLocaleString();
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <>


      <section style={{ marginTop: '150px' }} className='reserve'>
        <div >
          <h1>Reserve Your Space</h1>
          <div>
            <form action="" onSubmit={handleSubmit}>
              <div className='data'>
                <div>
                  <label htmlFor="area">Select Location</label>
                  <select name="area" id="" onChange={handleChange}>
                    <option value="">-select-</option>
                    {area.map((item) => (
                      <option value={item.area}>{item.area}</option>
                    ))}
                  </select>
                </div>

                <div className=' d-flex  flex-column '>
                  <label htmlFor="date">Select Date</label>
                  <input type="date" name="date" id="" min={today} onChange={handleChange} />
                </div>

                <div className=' d-flex  flex-column '>
                  <label htmlFor="time">Select Parking Time</label>
                  <input type="time" name="time" id="" onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="hours">Enter Parking Hours</label>
                  <select name="hours" id="" onChange={handleChange}>
                    <option value="">-select-</option>
                    <option value="1hrs">1hrs</option>
                    <option value="2hrs">2hrs</option>
                    <option value="3hrs">3hrs</option>
                    <option value="4hrs">4hrs</option>
                    <option value="5hrs">5hrs</option>
                    <option value="6hrs">6hrs</option>
                    <option value="7hrs">7hrs</option>
                    <option value="8hrs">8hrs</option>
                    <option value="9hrs">9hrs</option>
                    <option value="10hrs">10hrs</option>
                  </select>
                </div>
                <button className='btn'>Reserve Slot</button>
              </div>
            </form>
          </div>
        </div>
      </section>


      <ToastContainer />
    </>
  )
}

export default ReserveSlot


