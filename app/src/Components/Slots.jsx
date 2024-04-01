import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Slots = () => {

  // const [data, setData] = useState('')
  // const { id } = useParams()

  // useEffect(() => {
  //   const fetchdata = async () => {
  //     let response = await axios.get(`http://localhost:4000/viewarea/${id}`)
  //     console.log(response.data);
  //     setData(response.data)
  //   }
  //   fetchdata()
  // }, [])

  // console.log('uuyuyu', data);

  return (
    <>

      <section style={{ marginTop: '200px' }}>
        <div className='slot'>
          <div>
            Slot 1
          </div>
        </div>
      </section>

    </>
  )
}

export default Slots