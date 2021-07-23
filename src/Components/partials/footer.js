import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
const Footer = ()=>{
    return(
        <>
        <section id='footer-sec'>
            <Container>
                <Row className='justify-content-around' id="foot-text" >
                    <Col md={6} xs={6}><p>©2021 Alaa Eddine Touati</p></Col>
                    <Col md={6} xs={6}><p className='text-right'>Hope you had good Time</p></Col>
                </Row>
            </Container>
        </section>    
        </>
    )
}
export default Footer;