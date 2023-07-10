import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MasterLayout = () => {
    return (
        <div>
            <Navbar expand="lg" className='nav'>
                <Container>
                    <Navbar.Brand className='text-white link-font'>Port<span className='logo-span'>folio</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link href='/' className='text-white'>Home</Nav.Link>
                            <Nav.Link href='/project' className='text-white'>Project</Nav.Link>
                            <Nav.Link href="/experience" className='text-white'>Experience</Nav.Link>
                            <Nav.Link href="/education" className='text-white'>Education</Nav.Link>
                            <Nav.Link href="/training" className='text-white'>Training</Nav.Link>
                            <Nav.Link href="/technology" className='text-white'>Technology</Nav.Link>
                            <Nav.Link href="/contact" className='text-white'>Contact</Nav.Link>
                            <Nav.Link href="/reference" className='text-white'>Reference</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MasterLayout;