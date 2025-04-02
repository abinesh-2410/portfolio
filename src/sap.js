import { ErrorMessage, Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from "yup"
import { Form,Button } from 'react-bootstrap'
function Validation() {
    let [user,setUser]=useState({
        name:"",email:"",age:""
    })
    let schema=yup.object().shape({
        name:yup.string().required("This is must"),
        email:yup.string().email("Enter valid email").required(),
        age:yup.string().matches(/\d{2}/,"Enter minimum 2 digits here").required()
    
    })
    let handleinput=(e)=>{
setUser({...user,[e.target.name]:e.target.value})
    }
    let handleSubmit=()=>{
        console.log(user)
    }
  return (
    <div>
        <Formik initialValues={user}
        validationSchema={schema}
        onSubmit={handleSubmit}>

       {({handleSubmit,handleChange})=>(

     
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Enter Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" value={user.name} onChange={(e)=>{handleinput(e);handleChange(e)}} />
        <ErrorMessage name="name" component="div" className='text-danger'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter email: </Form.Label>
        <Form.Control type="text" placeholder="Enter email" name="email" value={user.email} onChange={(e)=>{handleinput(e);handleChange(e)}} />
        <ErrorMessage name="email" component="div" className='text-danger'/>
      </Form.Group><Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Enter age:</Form.Label>
        <Form.Control type="text" placeholder="Enter age" name="age" value={user.age} onChange={(e)=>{handleinput(e);handleChange(e)}}/>
        <ErrorMessage name="age" component="div" className='text-danger'/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      )}
    </Formik>
    </div>
  )
}
