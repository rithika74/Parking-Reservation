import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

    const navigate=useNavigate()

    const handleSubmit=()=>{
        navigate('/adminpage')
    }


    return (
        <>

            <section style={{ marginTop: '250px', marginBottom: '100px' }}>

                <div className='container'>
                    <div className='row'>
                        <div className='hd col-lg-6 col-md-12'>
                            <div>
                                Admin Login
                            </div>
                        </div>
                        <div className='form col-lg-6 col-md-12 '>
                            <form action="" onSubmit={handleSubmit}>
                                <input type="email" name="" id="" placeholder='Email ID' />
                                <input type="password" name="" id="" placeholder='Password' />
                                <button className='btn'>LOGIN</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AdminLogin