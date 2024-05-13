
import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


export default class Slider1 extends Component {
  render() {
    return (
      <div className='container' id='home'>
        <Carousel style={{backgroundColor:"lightpink",color:"white"}}>
       
      <Carousel.Item >

        <div className='d-flex justify-content-evenlt p-4 align-items-center' >
            <div className='p-2'>
            <h3 className='display-1 fw-bold'>Welcome to Our Gift Shop</h3>
          <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant=""style={{backgroundColor:"LightGoldenrodYellow",borderRadius:"-0px"}} className='mt-4 fw-bold btn'>Contact Us</Button>
            </div>
            <div className='p-2'>
                <img src='./images/slider-img.png'alt=''/>
            </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='d-flex justify-content-evenlt p-4 align-items-center' >
            <div className='p-2'>
            <h3 className='display-1 fw-bold'>Welcome to Our Gift Shop</h3>
          <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant=""style={{backgroundColor:"LightGoldenrodYellow",borderRadius:"-0px"}} className='mt-4 fw-bold'>Contact Us</Button>

            </div>
            <div className='p-2'>
                <img src='./images/slider-img.png'alt=''/>
            </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='d-flex justify-content-evenlt p-4 align-items-center' >
            <div className='p-2'>
            <h3 className='display-1 fw-bold'>Welcome to Our Gift Shop</h3>
          <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant="" className='mt-4 fw-bold ' style={{ backgroundColor:"LightGoldenrodYellow",borderRadius:"-0px"}}>Contact Us</Button>

            </div>
            <div className='p-2'>
                <img src='./images/slider-img.png'alt=''/>
            </div>
        </div>
      </Carousel.Item>  
    </Carousel>


      </div>
    )
  }
}