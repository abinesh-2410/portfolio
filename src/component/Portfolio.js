import React from 'react'
import { Button,Navbar,Nav,Container,NavLink} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineClose,AiOutlineMenu } from 'react-icons/ai'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsBoxArrowUpRight } from "react-icons/bs";
function Portfolio() {
  // const menuData=[{path:'/',name:"projects"},
  //   {path:'/about',name:"skills"},
  //   {path:'/contact',name:"contact"}
  // ]
 
  return (
    <>
  <section id='home'>
     <div className='bg'>
    
            
       <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className='name'>Portfolio.</Navbar.Brand>
        <  Navbar.Toggle aria-controls="basic-navbar-nav"className='symbol'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
             <Nav.Item  className=''>
        <Nav.Link href="/projects" className='list_item'>projects</Nav.Link>
      </Nav.Item>
      <Nav.Item  >
        <Nav.Link href="/skills" className='list_item'>skills</Nav.Link>
      </Nav.Item>
      <Nav.Item className=''>
        <Nav.Link href="/contact"   className='list_item'>contact</Nav.Link>
      </Nav.Item>
          </Nav>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
     <center>
       <h4 className='hi'><span className='n1'>Hi,I am</span> <span className='n2'>Abinesh Sakthivel.</span>  </h4> 
       <h1 className='skill'>A Full-Stack Developer.</h1>
       <p className='line'>Adipisicing is no escape from where something is easy to follow.<br/> However, the choice of the chosen way of things anyone?<br/> It is as if no one can see it! The greater will follow the smaller.</p>
       <button className='btn1'>  <a
    href="/Resume_abinesh.pdf" // Relative path to the file in the public folder
    download="Resume_abinesh.pdf" // Optional: Name of the downloaded file
    
  >
  resume
  </a></button><FaGithub className='logo1' /><a href="http://www.linkedin.com/in/abinesh24"><FaLinkedin className='logo2' /></a>
     </center>
    </div>
    </section>
        </>
  )
}

export default Portfolio