import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BrandIcon from '../../assets/icons/brandicon.png';

const Header = () => {
    return (
        <div className='navbar-bg'>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <img
                        src={BrandIcon}
                        width="40"
                        height="40"
                        alt="React Bootstrap logo"
                    />
                    <Navbar.Brand href="#home" className='ms-2 brand'>Chef's Palette</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link>
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/blog">Blog</Link>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Button className='btn btn-warning'><Link to="/login">Login</Link></Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
