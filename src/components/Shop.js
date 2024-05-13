import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';


export default class Shop extends Component {
    constructor() {
        super();
        this.state = {
            items: [
              { id: 1, image: "./images/p1.png", name: "Ring", price: 200 },
              { id: 2, image: "./images/p2.png", name: "Watch", price: 300 },
              { id: 3, image: "./images/p3.png", name: "Teady Bear", price: 110 },
              { id: 4, image: "./images/p4.png", name: "Flower Bouquet", price: 45 },
              { id: 5, image: "./images/p5.png", name: "Teady Bear", price: 95 },
              { id: 6, image: "./images/p6.png", name: "Flower Bouquet", price: 70 },
              { id: 7, image: "./images/p7.png", name: "Watch", price: 400 },
              { id: 8, image: "./images/p8.png", name: "Ring", price: 450 },
            ],
          };
        }
  render() {    
    return (
        <div className='container'>
        <div id="shop">
       <div className="row row-cols-1 row-cols-md-4 mt-5 text-center ">
         {this.state.items.map((item, index) => {
           return (
             <div className="col p-2 ">
               <Card style={{ width: "17rem" }} className="shadow">
                 <Card.Img
                   variant="top"
                   src={item.image}
                   style={{ height: "150px", width: "150px" }}
                   className="mx-auto d-block p-3"
                 />
                 <Card.Body>
                   <div className="d-flex ">
                     <Card.Title className="flex-grow-1">
                       {item.name}
                     </Card.Title>
                     <Card.Text>${item.price}</Card.Text>
                   </div>
                   {/* <Button
                     variant=""
                     className="mx-auto d-block mt-3 border"
                     style={{ backgroundColor: "hotpink", fontWeight: "bolder" }}
                   >
                     +<i class="fa-solid fa-cart-shopping"></i>
                   </Button> */}
                    <Link to={'/Cart'} state={item}  className="mx-auto d-block mt-3 border"
                     style={{ backgroundColor: "hotpink", fontWeight: "bolder" }}> +<i class="fa-solid fa-cart-shopping"></i></Link>

                 </Card.Body>
               </Card>
             </div>
           );
         })}
       </div>
       <Button
         variant=""
         className="mx-auto d-block m-3 p-2 btn border"
         style={{ backgroundColor: "hotpink", fontWeight: "bolder",borderRadius:"-0px" }}
       >
         View All Products
       </Button>
       </div>

   </div>
 
    )
  }
}
