import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Third() {
  return (
    <>
    <section id='skills'>
    <div className='bg'>
    <Row>
<Col lg={12}>
<h3 className='skill'>Skills</h3>
</Col>
 </Row>
 <Row>
<Col lg={4}>

</Col>
<Col lg={4}>
<ul className='list'>
<li className='list1 btn'>HTML</li>
<li className='list1 btn'>CSS</li>
<li className='list1 btn'>JavaScript</li>
<li className='list1 btn'>TypeScript</li>
<li className='list1 btn'>React</li>
<li className='list1 btn'>Redux</li>
<li className='list1 btn'>SASS</li>
<li className='list1 btn'>Material UI</li>
<li className='list1 btn'>Git</li>
<li className='list1 btn'>CI/CD</li>
<li className='list1 btn'>Jest</li>
<li className='list1 btn'>Enzyme</li>
</ul>

</Col>
<Col lg={4}
></Col>

 </Row>
    
    
    </div>
    </section>
    </>
  )
}

export default Third