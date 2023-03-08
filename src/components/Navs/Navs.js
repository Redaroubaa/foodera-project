import React from 'react'
import { Navbar,Nav,Container,} from 'react-bootstrap'
import './Navs.css';
import logo from './../../assets/logo.png'

 function Navs() {
  return (
    <Navbar  expand="lg">
    <Container>
      <Navbar.Brand href="#home"><img src={logo} title="logo"/> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end flex-grow-1 pe-3" >
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#link">about us</Nav.Link>
          <Nav.Link href="#link">explore food</Nav.Link>
          <Nav.Link href="#link">Review</Nav.Link>
          <Nav.Link href="#link">faq</Nav.Link>
          <Nav.Link id='lastnav'>776899765</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
   
  </Navbar>
  
  )
}

export default Navs