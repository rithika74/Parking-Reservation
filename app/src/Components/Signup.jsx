import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate=useNavigate()

    const handleSubmit=()=>{
        navigate('/user')
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

                                <input type="text" name="" id="" placeholder='Name' />
                                <input type="text" name="" id="" placeholder="Date of Birth" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} />
                                <input type="email" name="" id="" placeholder='Email ID' />
                                <select name="" id="">
                                    <option value="">-Gender-</option>
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                    <option value="">Other</option>
                                </select>
                                <input type="number" name="" id="" placeholder='Phone Number' />
                                <input type="text" name="" id="" placeholder='Address' />
                                <input type="password" name="" id="" placeholder='Password' />
                                <button className='btn'>Register</button>
                                <Link to={'/user'} className='mt-2 li'>
                                    Already have an Account?
                                </Link>

                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Signup