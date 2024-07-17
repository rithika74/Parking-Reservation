import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { url } from '../url';

const Signup = () => {

    const navigate = useNavigate()
    const [data, setData] = useState('')

    useEffect(() => {
        const user = localStorage.getItem('id')
        if (user) {
            navigate('/userpage')
        }
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'dob') {
            const formattedDob = value.split('-').reverse().join('-');
            setData({ ...data, [name]: formattedDob });
        } else {
            setData({ ...data, [name]: value });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (data.name && data.dob && data.email && data.gender && data.phn && data.address && data.password && data.usertype) {

            const isValidPhoneNumber = /^\d{10}$/.test(data.phn);
            if (!isValidPhoneNumber) {
                alert('Please enter a valid 10-digit phone number.');
                return;
            }

            try {
                const dob = new Date(data.dob);
                const today = new Date();
                const age = today.getFullYear() - dob.getFullYear();

                if (age < 18) {
                    alert('You must be at least 18 years old to register.');
                    return;
                }

                const response = await axios.post(`${url}/register`, data);
                if (response.data.emailExists) {
                    alert('Email already exists.');
                } else {
                    toast.success('Registration successful');
                    setData('');
                    navigate('/login');
                }
            } catch (error) {
                if (error.response && error.response.status === 409) {
                    alert('Email already exists.');
                } else {
                    console.error('Error during signup:', error);
                    alert('An error occurred while processing your request.');
                }
            }
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <>

            <section style={{ marginTop: '150px', marginBottom: '50px' }}>

                <div className='container'>
                    <div className='row'>
                        <div className='hd col-lg-6 col-md-12'>
                            <div>
                                Register Here
                            </div>
                        </div>
                        <div className='form col-lg-6 col-md-12 '>
                            <form action="" onSubmit={handleSubmit}>

                                <input type="text" name="name" id="" onChange={handleChange} placeholder='Name' />
                                <input type="text" name="dob" id="" onChange={handleChange} placeholder="Date of Birth" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} />
                                <input type="email" name="email" id="" onChange={handleChange} placeholder='Email ID' />
                                <select name="gender" id="gender" onChange={handleChange}>
                                    <option value="">-Gender-</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                <input type="text" name="phn" id="" onChange={handleChange} placeholder='Phone Number' />
                                <input type="text" name="address" id="" onChange={handleChange} placeholder='Address' />
                                <input type="password" name="password" id="" onChange={handleChange} placeholder='Password' />
                                <select name="usertype" id="" onChange={handleChange}>
                                    <option value="">-Choose Your Role-</option>
                                    <option value="user">User</option>
                                    <option value="provider">Provider</option>
                                </select>
                                <button className='btn'>Register</button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <ToastContainer />
        </>
    )
}

export default Signup

