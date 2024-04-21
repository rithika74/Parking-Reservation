import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../Images/logo.png'

const Admin = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const navigate = useNavigate()
    const email = localStorage.getItem('email');

    useEffect(() => {
        if (!email) {
            navigate('/');
        }
    }, [email, navigate]);

    const toggleNavbar = () => {
        setIsNavExpanded(!isNavExpanded);
    };

    const handleNavLinkClick = () => {
        setIsNavExpanded(false);
    };

    const handleClick = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <>

            <header >
                <Navbar
                    expand="lg"
                    variant="light"
                    className="shadow-sm fixed-top back "
                    expanded={isNavExpanded}
                    onToggle={toggleNavbar}
                >
                    <Container className='bg'>
                        <Navbar.Brand href="#home" className='brand'><img src={logo} alt="" width={'80px'} style={{ marginRight: '10%' }} />ParkHub</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: 'none', outline: 'none' }}>
                            {isNavExpanded ? <span style={{ color: 'white' }}>&times;</span> : <span style={{ color: 'white' }}>&#9776;</span>}
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto link">
                                <Nav.Link as={Link} to='/adminpage' onClick={handleNavLinkClick}><li>Home</li></Nav.Link>
                                <Nav.Link as={Link} to='/adminpage/areas' onClick={handleNavLinkClick}><li>Parking Locations</li></Nav.Link>
                                <Nav.Link as={Link} to='/adminpage/userdetails' onClick={handleNavLinkClick}><li>User</li></Nav.Link>
                                <Nav.Link as={Link} to='/adminpage/providerdetails' onClick={handleNavLinkClick}><li>Provider</li></Nav.Link>
                                <Nav.Link as={Link} to='/adminpage/viewreservations' onClick={handleNavLinkClick}><li>Reservations</li></Nav.Link>
                                <Nav.Link onClick={handleClick}><li>Logout</li></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <Outlet />


        </>
    )
}

export default Admin

