import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Slots = () => {

  const [data, setData] = useState('')
  const { id } = useParams()

  useEffect(() => {
    const fetchdata = async () => {
      let response = await axios.get(`http://localhost:4000/reservedarea/${id}`)
      console.log(response.data);
      setData(response.data)
    }
    fetchdata()
  }, [])

  const space = parseInt(data.space);
  const slots = Array.from({ length: space }, (_, index) => `Slot ${index + 1}`);

  console.log('uuyuyu', data);
  console.log(space);

  return (
    <>

      <section style={{ marginTop: '200px' }}>
        <div className='slot'>
          <div>
            {slots.map((slot, index) => (
              <div key={index} className='slots'>
                {slot}
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default Slots

