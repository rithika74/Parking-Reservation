import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Login = () => {

    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate()



    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    console.log('dataaa', data);

    useEffect(() => {
        const user = localStorage.getItem('id')
        const type = localStorage.getItem('usertype')
        if (user) {
            if (type === 'user') {
                navigate('/userpage')
            }
            if (type === 'provider') {
                navigate('/providerpage')
            }
        }
        if (data.email === 'admin@gmail.com' && data.password === 'admin') {
            navigate('/adminpage')
        }
    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault()
        if (data.email === 'admin@gmail.com' && data.password === 'admin') {
            console.log('success');
            alert('Admin Login Success')
            localStorage.setItem('email', data.email);
            navigate('/adminpage')
        }
        else {
            try {
                let response = await axios.post('http://localhost:4000/login', data)
                console.log('gggg', response.data);
                const token = response.data.token;
                console.log(token);

                if (response.data) {
                    if (response.data.user.usertype === 'provider') {
                        if (response.data.user.status) {
                            localStorage.setItem('token', token)
                            localStorage.setItem('id', response.data.user._id)
                            localStorage.setItem('usertype', response.data.user.usertype)
                            console.log('success');
                            alert('Provider Login Success')
                            navigate('/providerpage');
                        }
                        else {
                            alert('Need admin verification for login')
                        }
                    }
                    if (response.data.user.usertype === 'user') {
                        localStorage.setItem('token', token)
                        localStorage.setItem('id', response.data.user._id)
                        localStorage.setItem('usertype', response.data.user.usertype)
                        console.log('success');
                        alert('User Login Success')
                        navigate('/userpage');
                    }
                }


            } catch (e) {
                if (e.response && e.response.status === 401) {
                    alert('Invalid email or password');
                } else {
                    alert('Login Failed');
                }
            }
        }
    }

    const type = localStorage.getItem('usertype')
    console.log('type', type);

    return (
        <>

            <section style={{ marginTop: '250px', marginBottom: '100px' }}>

                <div className='container'>
                    <div className='row'>
                        <div className='hd col-lg-6 col-md-12'>
                            <div>
                                Login Here
                            </div>
                        </div>
                        <div className='form col-lg-6 col-md-12 '>
                            <form action="" onSubmit={handleSubmit}>
                                <input type="email" name="email" id="" onChange={handleChange} placeholder='Email ID' />
                                <input type="password" name="password" id="" onChange={handleChange} placeholder='Password' />
                                <button className='btn'>LOGIN</button>
                                {/* <Link to={'/signup'} className='mt-2 li'>
                                    Don't have an Account?
                                </Link> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Login

