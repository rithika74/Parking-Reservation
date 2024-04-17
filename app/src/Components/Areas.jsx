import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Areas = () => {

    const navigate = useNavigate()
    const [data, setData] = useState([])
    const id = localStorage.getItem('id');

    useEffect(() => {
        const fetchdata = async () => {
            console.log('kfkfkk', id);
            let response = await axios.get(`http://localhost:4000/providedarea/${id}`)
            console.log(response.data);
            setData(response.data)
        }
        fetchdata()
    }, [])

    console.log(data);

    const handleClick = () => {
        navigate('/providerpage/addareas')
    }



    return (
        <>

            <section style={{ marginTop: '200px' }}>
                <div className='area'>
                    <div>
                        <button onClick={handleClick}>Add New</button>
                    </div>
                    <div className='table'>
                        {data.length > 0 ? (
                            <table>
                                <tr>
                                    <th>Sl.No</th>
                                    <th>Location</th>
                                    <th>Space</th>
                                </tr>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.area}</td>
                                        <td>{item.space}</td>
                                    </tr>
                                ))}
                            </table>
                        ) : (
                            <div>No Available Space</div>
                        )}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Areas