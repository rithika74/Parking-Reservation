import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { url } from '../url'

const UpdateSpace = () => {

    const [data, setData] = useState('')
    const { id } = useParams();
    const navigate=useNavigate();

    useEffect(() => {
        let fetchdata = async () => {
            try {
                let response = await axios.get(`${url}/areaview/${id}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchdata();
    }, [])

    console.log('data', data);

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const userId = localStorage.getItem('id');
            let response=await axios.put(`${url}/updatespace/${id}`,data);
            if (response.data) {
                navigate(`/providerpage/parkingareas/${userId}`)
            }
        } catch (error) {
            
        }
    }


    return (
        <>


            <section style={{ marginTop: '200px' }}>
                <div className='add'>
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="area">Location</label>
                        <input type="text" name="area" id="" value={data.area} />
                        <label htmlFor="space">Add Space</label>
                        <input type="text" name="space" id="" onChange={handleChange} value={data.space} />
                        <label htmlFor="cost">Change Parking Cost</label>
                        <input type="text" name="cost" id="" onChange={handleChange} value={data.cost}/>
                        <button>Save</button>
                    </form>
                </div>
            </section>



        </>
    )
}

export default UpdateSpace