import React, { useState } from 'react'
import Button from "react-bootstrap/Button";

export default function Contact() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [message,setMessage]=useState("")

  function addUser(e)
  {
      let user={name,email,phone,message}
      // e.preventDefault(); 
      fetch("http://localhost:3000/contact",{
          method:"post",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(user)
      }).then((response)=>{
          response.json().then((response1)=>{
              console.log(response1)
          })
      })
  }
  return (
    <div className='container'>
        <div className="d-flex flex-row mb-2 mt-5" id="contact" style={{backgroundColor:"whitesmoke"}}>
                <div className="p-2 border w-70">
               <iframe style={{width:"600px",height:"500px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2624.99162985171!2d2.294481!3d48.85837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1691668438960!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                </div>
                  
                <div className="p-2 mx-auto p-5 m-5" >
                 <form className="" onSubmit={addUser}>
                 <div class="col-12 mb-4">
                 <input type="text" class="form-control" id="inputAddress2" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                  </div>
                  <div class="col-12 mb-4">
                 <input type="email" class="form-control" id="inputAddress2" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  </div>
                  <div class="col-12 mb-4">
                 <input type="text" class="form-control" id="inputAddress2" placeholder="Telephone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                  </div>
                  <div class="mb-3">
                   <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                 </div>
                 <div class="mb-3">
                 <Button
                    variant=""
                    className="mx-auto d-block m-3 p-2 btn border"
                    style={{
                      backgroundColor: "hotpink",
                      fontWeight: "bold",
                      borderRadius:"-0px",
                      width: "200px",
                    }}
                  >Send
                  </Button>
                  </div>
                 </form>
                </div>

              </div>
    </div>
  )
}
