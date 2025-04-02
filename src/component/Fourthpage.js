import React from 'react'
import Swal from 'sweetalert2'
import { Col, Row } from 'react-bootstrap'

function Fourthpage() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6cdc2123-f72b-4558-b558-ba70e635bb43");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    }
  };
  return (
    <section id='contact'>
    <div className='bg'>
        <Row>
     <Col lg={12}>
     <h2 className='contact'>Contact Us</h2>
     </Col>
     </Row>
     <Row>
      <Col lg={4}></Col>
      <Col lg={4}>
         <div className='table' style={{paddingTop:"30px"}}>
        <form style={{alignItems:"center",}} onSubmit={onSubmit}>
            <label className='full'>Full Name</label><br></br>
         <input type='text' placeholder='Enter the name' className='form1' name="name" required/>
         <label className='email'>Email Address</label><br></br>
         <input type='email' placeholder='Email Address' className='form2' name="email" required/>
         <label className='your'>Your Message</label><br></br>
         <textarea type='text' placeholder='Enter Your Message' className='text' name="message" required></textarea>
         <button className='btn2' type='submit'>Submit</button>
        </form>
        </div>
      </Col>
      <Col lg={4}></Col>


     </Row>
     <center className='create'>Created by Abinesh Sakthivel  </center>
     
    </div>
    </section>
  )
}

export default Fourthpage