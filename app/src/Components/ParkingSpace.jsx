import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../url';

const ParkingSpace = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            let response = await axios.get(`${url}/allarea`)
            console.log(response.data);
            setData(response.data)
        }
        fetchdata()
    }, [])

    console.log(data);

    return (
        <>

            <section className='section'>
                {/* <div className='table'>
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
                </div> */}

                <div className='tablediv' style={{ width: '100%'  }}>
                    {data.length > 0 ? (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sl.No</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Space</th>
                                    <th scope="col">Cost (per hr)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.area}</td>
                                        <td>{item.space}</td>
                                        <td>{item.cost}</td>
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

export default ParkingSpace



