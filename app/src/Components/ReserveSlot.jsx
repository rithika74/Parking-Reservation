import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const ReserveSlot = () => {
  const navigate = useNavigate()

  const [area, setArea] = useState([])
  const [data, setData] = useState('')

  useEffect(() => {
    const fetchdata = async () => {
      let response = await axios.get('http://localhost:4000/allarea')
      console.log(response.data);
      setArea(response.data)
    }
    fetchdata()
  }, [])

  console.log(area);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data.area && data.date && data.time && data.hours) {
      try {
        const response = await axios.post('http://localhost:4000/reserve', data)
        if (response.data) {
          setData('')
          console.log('success');
          // alert('Location and Sapce Added')
          navigate('/userpage/slots')
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('An error occurred while processing your request.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  }


  // const handleClick=()=>{
  //   navigate('/userpage/slots')
  // }
  return (
    <>


      <section style={{ marginTop: '120px' }} className='reserve'>
        <div >
          <h1>Reserve Your Space</h1>
          <div>
            <form action="" onSubmit={handleSubmit}>
              <div className='data'>
                <div>
                  <label htmlFor="area">Select Location</label>
                  <select name="area" id="" onChange={handleChange}>
                    <option value="">-select-</option>
                    {/* <option value="calicut">calicut</option>
                    <option value="kochi">kochi</option> */}
                    {area.map((item) => (
                      <option value={item.area}>{item.area}</option>
                    ))}
                  </select>
                </div>

                <div className=' d-flex  flex-column '>
                  <label htmlFor="date">Select Date</label>
                  <input type="date" name="date" id="" onChange={handleChange} />
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

