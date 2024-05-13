import React from 'react'
import Button from "react-bootstrap/Button";
import Carousel from 'react-bootstrap/Carousel';


export default function Testimonial() {
  return (
    <div className='container'>
         <div className=" mt-5 " id="testimonial">
              <h2 className="text-center m-5 p-5"> Testimonial </h2> 
              <Carousel >
             <Carousel.Item >

         <div className=" d-flex ">
         <Button variant="" className="mt-5"  style={{height:"100px",backgroundColor:"hotpink ", color:"white",borderRadius:"-0px"}}><i class="fa-solid fa-angle-left"></i></Button>
          <div className="p-2 border shadow" style={{backgroundColor:"white" }}>
          <div className="ms-5 p-2">
               <div >
                 <h5 style={{color:"MediumVioletRed",fontWeight:"bold"}}>
                   Morijorch</h5>
                
                 <h6 style={{color:"gray"}}>
                   Default model text </h6>

                
               </div>
               
             </div>
             <p className="ms-5 me-5 fs-5">
               editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
             </p>
          </div>
          <Button variant=""className="mt-5"  style={{height:"100px",backgroundColor:"hotpink ", color:"white",borderRadius:"-0px"}} ><i class="fa-solid fa-angle-right"></i></Button>{' '}
           </div>
       
      </Carousel.Item>
      
      <Carousel.Item >

         <div className="d-flex ">
         <Button variant=""className="mt-5"  style={{height:"100px",backgroundColor:"hotpink ", color:"white",borderRadius:"-0px"}} ><i class="fa-solid fa-angle-left"></i></Button>

          <div className="p-2 border shadow" style={{backgroundColor:"white"}}>
          <div className="ms-5 p-2">
               <div >
                 <h5 style={{color:"MediumVioletRed",fontWeight:"bold"}}>
                 Rochak
                 </h5>
                 <h6 style={{color:"gray"}}>
                  Default text model
                 </h6>
               </div>
             </div>
             <p className="ms-5 me-5 p-2 fs-5">
             Various editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
          </div>
          <Button variant=""className="mt-5"  style={{height:"100px",backgroundColor:"hotpink ", color:"white",borderRadius:"-0px"}} ><i class="fa-solid fa-angle-right"></i></Button>{' '}
             
           </div>
       
      </Carousel.Item>

 <Carousel.Item >

         <div className=" d-flex ">
         <Button variant=""className="mt-5"  style={{height:"100px",backgroundColor:"hotpink ", color:"white",borderRadius:"-0px"}} ><i class="fa-solid fa-angle-left"></i></Button>

          <div className="p-2 border shadow" style={{backgroundColor:"white"}}>
          <div className="ms-5 p-2">
               <div >
                 <h5 style={{color:"MediumVioletRed",fontWeight:"bold"}}>
                 Brad Johns
                 </h5>
                 <h6 style={{color:"gray"}}>
                   Default model text
                 </h6>
               </div>
             </div>
             <p className="ms-5 me-5 p-2 fs-5">
               editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
             </p>
          </div>
          <Button variant=""className="mt-5"  style={{height:"100px",backgroundColor:"hotpink ", color:"white",borderRadius:"-0px"}} ><i class="fa-solid fa-angle-right"></i></Button>{' '}

           </div>
       
      </Carousel.Item>
     
    </Carousel>
    </div>

    </div>
  )
}
