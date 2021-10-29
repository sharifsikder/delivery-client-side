import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {


  
    return (
        
           <>
         <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
  <Container>
  <Navbar.Brand href="#home"> <img
        src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/foodota-logo-main.svg"
        width="300"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/items">Items</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>

     

      <Nav.Link as={Link} to="/register">Sign Up</Nav.Link>
     
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>

       
    );
};

export default Header;