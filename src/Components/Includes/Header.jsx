import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Header() {
  const location = useLocation();
  useEffect(() => {
    // Whenever the location changes (i.e., navigating to a new page), scroll to the top
    window.scrollTo(0, 0);
}, [location]);
  return (
    <Navbar expand="lg" className="navbar-dark">
      <Container>
        <Link className='navbar-brand' to='/'>ProductManager</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-link' to="/products">Products</Link>
            <Link className='nav-link' to="/orders">Orders</Link>
            <Link className='nav-link' to="/users">Users</Link>
            <Link className='nav-link' to="/messages">Messages</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;