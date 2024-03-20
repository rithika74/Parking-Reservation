import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate=useNavigate()

    const handleSubmit=()=>{
        navigate('/login')
    }

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

                                <input type="text" name="name" id="" placeholder='Name' />
                                <input type="text" name="dob" id="" placeholder="Date of Birth" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} />
                                <input type="email" name="email" id="" placeholder='Email ID' />
                                <select name="gender" id="gender">
                                    <option value="">-Gender-</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                <input type="number" name="phn" id="" placeholder='Phone Number' />
                                <input type="text" name="address" id="" placeholder='Address' />
                                <input type="password" name="password" id="" placeholder='Password' />
                                <select name="usertype" id="">
                                    <option value="">-Choose Your Role-</option>
                                    <option value="user">User</option>
                                    <option value="provider">Provider</option>
                                </select>
                                <button className='btn'>Register</button>
                                {/* <Link to={'/user'} className='mt-2 li'>
                                    Already have an Account?
                                </Link> */}

                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Signup