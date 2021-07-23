import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import './style.css'
import Image from './public/img/sec-img.jpg'

const AboutMe = ()=>{
    return(
        
        <section id='about-meq'>
            <Container>
                    <Row>
                        <Col md={6} xs={12} >
                            <div className='content-aboutme'>
                                <h2 id='main-text'>ABOUT ME</h2>
                            </div>
                            <div>
                                <h4 id='about-letter'>This can be an about section.</h4>
      
                                <p id='about-text'>Having recently graduated from the University of Manouba with a degree in Computer Science, I have completed one internship within web developement.Also having a career as a freelancer gave me the chance to get more knowledge, learn new technologies and get experience in web development. I am very ambiance person  I have strong technical skills as well as excellent interpersonal skills, enabling me to interact with a wide range of clients. I am eager to be challenged in order to grow and further improve my IT skills.</p>
                            </div>
                        </Col>
                        <Col  md={5} xs={12} className='mx-auto'>
                           
                            <div className="img">

                            <img src={Image} alt='sec' id='img-aboutme'/>
                                
                            </div>
                        </Col>
                        
                    </Row>
            </Container>
        </section>
     
            
        
    )
}
export default AboutMe