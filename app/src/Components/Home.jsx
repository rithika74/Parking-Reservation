

import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom'
import logo from '../Images/logo.png'

const Home = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const toggleNavbar = () => {
        setIsNavExpanded(!isNavExpanded);
    };

    const handleNavLinkClick = () => {
        setIsNavExpanded(false);
    };

    return (
        <>

            <header >
                <Navbar
                    expand="lg"
                    variant="light"
                    className="shadow-sm fixed-top "
                    style={{backgroundColor:'black'}}
                    expanded={isNavExpanded}
                    onToggle={toggleNavbar}
                >
                    <Container className='bg'>
                        <Navbar.Brand href="#home" className='brand'><img src={logo} alt="" width={'80px'} style={{marginRight:'10%'}}/>ParkHub</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: 'none', outline: 'none' }}>
                            {isNavExpanded ? <span style={{ color: 'white' }}>&times;</span> : <span style={{ color: 'white' }}>&#9776;</span>}
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto link">
                                <Nav.Link as={Link} to='/' onClick={handleNavLinkClick}><li>Home</li></Nav.Link>
                                <Nav.Link as={Link} to='/user' onClick={handleNavLinkClick}><li>User Login</li></Nav.Link>
                                <Nav.Link as={Link} to='/admin' onClick={handleNavLinkClick}><li>Admin Login</li></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <Outlet />


        </>
    )
}

export default Home