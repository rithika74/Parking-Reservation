import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ParkingArea = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            let response = await axios.get('http://localhost:4000/allarea')
            console.log(response.data);
            setData(response.data)
        }
        fetchdata()
    }, [])

    console.log(data);

    const handleDelete = async (id) => {
        try {
            let response = await axios.delete(`http://localhost:4000/deleteparking/${id}`);
            console.log(response);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting data:', error);
            alert('Failed to delete parking area. Please try again.');
        }
    }

    return (
        <>

            <section style={{ marginTop: '200px' }}>
                <div className='table'>
                    {data.length > 0 ? (
                        <table>
                            <tr>
                                <th>Sl.No</th>
                                <th>Location</th>
                                <th>Space</th>
                                <th>Provided by</th>
                                <th>Cost <br /> (per hr)</th>
                                <th>Action</th>
                            </tr>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.area}</td>
                                    <td>{item.space}</td>
                                    <td>{item.userId ? item.userId.name : 'Unknown'}</td>
                                    <td>{item.cost}</td>
                                    <td><a href="" onClick={() => { handleDelete(item._id) }}>Remove</a></td>
                                </tr>
                            ))}
                        </table>
                    ) : (
                        <div>No Available Space</div>
                    )}
                </div>
            </section>



        </>
    )
}

export default ParkingArea