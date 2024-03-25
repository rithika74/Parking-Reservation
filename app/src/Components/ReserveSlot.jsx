import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReserveSlot = () => {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('/userpage/slots')
  }
  return (
    <>


      <section style={{ marginTop: '120px' }} className='reserve'>
        <div >
          <h1>Reserve Your Space</h1>
          <div>
            <form action="">
              <div className='data'>
                <div>
                  <label htmlFor="location">Select Location</label>
                  <select name="hours" id="">
                    <option value="">-select-</option>
                    <option value="one">1hrs</option>
                    <option value="two">2hrs</option>
                    <option value="three">3hrs</option>
                    <option value="four">4hrs</option>
                    <option value="five">5hrs</option>
                    <option value="six">6hrs</option>
                    <option value="seven">7hrs</option>
                    <option value="eight">8hrs</option>
                    <option value="nine">9hrs</option>
                    <option value="ten">10hrs</option>
                  </select>
                </div>

                <div className=' d-flex  flex-column '>
                  <label htmlFor="date">Select Date</label>
                  <input type="date" name="" id="" />
                </div>

                <div className=' d-flex  flex-column '>
                  <label htmlFor="time">Select Parking Time</label>
                  <input type="time" name="" id="" />
                </div>
                <div>
                  <label htmlFor="hours">Enter Parking Hours</label>
                  <select name="hours" id="">
                    <option value="">-select-</option>
                    <option value="one">1hrs</option>
                    <option value="two">2hrs</option>
                    <option value="three">3hrs</option>
                    <option value="four">4hrs</option>
                    <option value="five">5hrs</option>
                    <option value="six">6hrs</option>
                    <option value="seven">7hrs</option>
                    <option value="eight">8hrs</option>
                    <option value="nine">9hrs</option>
                    <option value="ten">10hrs</option>
                  </select>
                </div>
                <button onClick={handleClick} className='btn'>Reserve Slot</button>
              </div>
            </form>
          </div>
        </div>
      </section>



    </>
  )
}

export default ReserveSlot

