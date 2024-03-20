import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/userpage')
    }

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
                                <input type="email" name="email" id="" placeholder='Email ID' />
                                <input type="password" name="password" id="" placeholder='Password' />
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