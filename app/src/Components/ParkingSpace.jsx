import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ParkingSpace = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            let response = await axios.get('http://localhost:4000/allarea')
            console.log(response.data);
            setData(response.data)
        }
        fetchdata()
    }, [])

    console.log(data);

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
                                <th>Cost <br /> (per hr)</th>
                            </tr>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.area}</td>
                                    <td>{item.space}</td>
                                    <td>{item.cost}</td>
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

export default ParkingSpace