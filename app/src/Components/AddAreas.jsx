import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const AddAreas = () => {


    const [data, setData] = useState('')
    const navigate = useNavigate()

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (data.area && data.space) {
            try {
                const userId = localStorage.getItem('id');
                const areaData = { ...data, userId: userId };
                const response = await axios.post('http://localhost:4000/addarea', areaData)
                if (response.data) {
                    setData('')
                    console.log('success');
                    alert('Location and Sapce Added')
                    navigate(`/providerpage/parkingareas/${userId}`)
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while processing your request.');
            }
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <>

            <section style={{ marginTop: '200px' }}>
                <div className='add'>
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="area">Add New Location</label>
                        <input type="text" name="area" id="" onChange={handleChange} />
                        <label htmlFor="space">Add Required Space</label>
                        <input type="text" name="space" id="" onChange={handleChange} />
                        <button>Save</button>
                    </form>
                </div>
            </section>

            <ToastContainer />
        </>
    )
}

export default AddAreas