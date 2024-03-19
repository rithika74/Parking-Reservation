import React from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    return (
        <>

            <section style={{ marginTop: '250px', marginBottom: '100px' }}>

                <div className='container'>
                    <div className='row'>
                        <div className='hd col-lg-6 col-md-12'>
                            <div>
                                User Login
                            </div>
                        </div>
                        <div className='form col-lg-6 col-md-12 '>
                            <form action="">
                                {/* <label htmlFor="email">Email ID</label> */}
                                <input type="email" name="" id="" placeholder='Email ID' />

                                {/* <label htmlFor="password">Password</label> */}
                                <input type="password" name="" id="" placeholder='Password' />

                                {/* <input type="button" value="Login" className='btn'/> */}
                                <button className='btn'>LOGIN</button>
                                <Link to={'/signup'} className='mt-2 li'>
                                    Don't have an Account?
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default UserLogin