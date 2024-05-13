import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link  } from 'react-router-dom';


export default class Header123 extends Component {
  render() {
    return (
      
      <div className='container'id=''>
        <h1 className=' fw-bold ' style={{textAlign:"center"}}>GIFTOS</h1>
         <Navbar  className='shadow  sticky-top ' style={{backgroundColor:"LightGoldenrodYellow",borderTopLeftRadius:"30px",borderTopRightRadius:"30px"}}>
         <Container className='gifto-nav'>
          <Navbar.Brand href="#home" >GIFTOS</Navbar.Brand>
          <Nav className="m-auto gifto-nav justify-content-evenly  " >
            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link ><Link to='/Shop'>Shop</Link></Nav.Link>
            <Nav.Link ><Link to='/Whyus'>Why Us</Link></Nav.Link>
            <Nav.Link ><Link to='/Testimonial'>Testimonial</Link></Nav.Link>
            <Nav.Link><Link to='/Contact'>Contact</Link></Nav.Link>
            <Nav.Link ><Link to='/Login'>Login</Link><i class="fa-solid fa-user"></i></Nav.Link>
            <Nav.Link ><Link to='/Cart'><i class="fa-solid fa-bag-shopping"></i></Link></Nav.Link>
            <Nav.Link ><Link to='/Search'><i class="fa-solid fa-magnifying-glass"></i></Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      </div>
    )
 
 }
}