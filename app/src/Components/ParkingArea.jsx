import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ParkingArea = () => {

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
                                <th style={{width:'60px'}}>Sl.No</th>
                                <th style={{width:'200px'}}>Location</th>
                                <th style={{width:'200px'}}>Space</th>
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
            </section>



        </>
    )
}

export default ParkingArea