import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../url';

const ProviderDetails = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                let response = await axios.get(`${url}/providers`)
                console.log(response.data);
                setData(response.data)
            } catch (error) {
                console.log('Error fetching data', error);
            }
        }
        fetchdata();
    }, [])

    console.log('jhj', data);

    const handleVerify = async (userId) => {
        try {
            const response = await axios.patch(`${url}/userstatus/${userId}`, {
                status: true
            });

            setData((prevData) =>
                prevData.map((item) =>
                    item.id === userId ? { ...item, status: true } : item
                )
            );

            console.log('User verified:', response.data);

            window.location.reload();
        } catch (error) {
            console.error('Error verifying user:', error);
        }
    };


    const handleDelete = async (id) => {
        let response = await axios.delete(`${url}/deleteuser/${id}`);
        console.log(response);
        window.location.reload();
    }



    return (
        <>

            <section className='section'>
                {/* <div className='table'>
                    {data.length > 0 ? (
                        <table>
                            <tr>
                                <th>User Id</th>
                                <th >Name</th>
                                <th>Date of Birth</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Address</th>
                                <th>Phone Number</th>
                                <th>Usertype</th>
                                <th>Verification</th>
                                <th>Action</th>
                            </tr>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.address}</td>
                                    <td>{item.phn}</td>
                                    <td>{item.usertype}</td>
                                    <td>
                                        <button
                                            style={{
                                                backgroundColor: item.status ? 'green' : 'red',
                                                color: item.status ? 'white' : 'whitesmoke'
                                            }}
                                            onClick={() => handleVerify(item._id)}
                                            disabled={item.status}
                                        >
                                            {item.status ? 'Verified' : 'Verify'}
                                        </button>
                                    </td>
                                    <td><a href="" onClick={() => { handleDelete(item._id) }}>Delete</a></td>
                                </tr>
                            ))}
                        </table>
                    ) : (
                        <div>No Users Found</div>
                    )}
                </div> */}


                <div className='tablediv'>
                    {data.length > 0 ? (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sl No.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Date of Birth</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Usertype</th>
                                    <th scope="col">Verification</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.dob}</td>
                                        <td>{item.email}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.address}</td>
                                        <td>{item.phn}</td>
                                        <td>{item.usertype}</td>
                                        <td>
                                            <button
                                                style={{
                                                    backgroundColor: item.status ? 'green' : 'red',
                                                    color: item.status ? 'white' : 'whitesmoke',
                                                    border:'none'
                                                }}
                                                onClick={() => handleVerify(item._id)}
                                                disabled={item.status}
                                            >
                                                {item.status ? 'Verified' : 'Verify'}
                                            </button>
                                        </td>
                                        <td><a href="" onClick={() => { handleDelete(item._id) }}>Delete</a></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className=' text-center '>No Providers Found</div>
                    )}
                </div>


            </section>


        </>
    )
}

export default ProviderDetails