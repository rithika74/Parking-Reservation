import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { url } from '../url'

const Areas = () => {

    const navigate = useNavigate()
    const [data, setData] = useState([])
    const id = localStorage.getItem('id');

    useEffect(() => {
        const fetchdata = async () => {
            console.log('kfkfkk', id);
            let response = await axios.get(`${url}/providedarea/${id}`)
            console.log(response.data);
            setData(response.data)
        }
        fetchdata()
    }, [])

    console.log(data);

    const handleClick = () => {
        navigate('/providerpage/addareas')
    }

    const handleDelete = async (id) => {
        try {
            let response = await axios.delete(`${url}/deleteparking/${id}`);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting data:', error);
            alert('Failed to delete parking area. Please try again.');
        }
    }


    return (
        <>

            <section className='section'>
                <div className='area'>
                    <div>
                        <button onClick={handleClick}>Add New</button>
                    </div>
                </div>
                {/* <div className='table'>
                        {data.length > 0 ? (
                            <table>
                                <tr>
                                    <th>Sl.No</th>
                                    <th>Location</th>
                                    <th>Space</th>
                                    <th>Cost <br /> (per hr)</th>
                                    <th>Action</th>
                                </tr>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.area}</td>
                                        <td>{item.space}</td>
                                        <td>{item.cost}</td>
                                        <td>
                                            <a href="" onClick={() => { handleDelete(item._id) }}>Remove</a>
                                        </td>
                                    </tr>
                                ))}
                            </table>
                        ) : (
                            <div>No Available Space</div>
                        )}
                    </div> */}


                <div className='tablediv'>
                    {data.length > 0 ? (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sl.No</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Space</th>
                                    <th scope="col">Cost (per hr)</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.area}</td>
                                        <td>{item.space}</td>
                                        <td>{item.cost}</td>
                                        <td>
                                            <a href="" style={{ marginRight: '10px', color: 'green' }} onClick={()=>{navigate(`/providerpage/updatespace/${item._id}`)}}>Update</a>
                                            <a href="" onClick={() => { handleDelete(item._id) }}>Remove</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className=' text-center '>No Available Space</div>
                    )}
                </div>



            </section>

        </>
    )
}

export default Areas



