import React from 'react';
import {Container, Form,Col,Row} from 'react-bootstrap';


const Contact = ()=>{
    return(
        <>
        <section id='about-meq'>
             <Container>
                <p id='main-text'>CONTACT</p>
                <Row className='justify-content-center pt-5'>
                    <Col md={8} xs={12}>
                        <Row>
                            <Col md={6} xs={12}>
                            <Form.Group>
                                <Form.Label>Your First Name</Form.Label>
                                <Form.Control type='text' placeholder='Enter your firstname'/>
                            </Form.Group>
                            </Col>
                            <Col md={6} xs={12}>
                            <Form.Group>
                                <Form.Label>Your Last Name</Form.Label>
                                <Form.Control type='text' placeholder='Enter your lastname'/>
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label>Your Last Name</Form.Label>
                                    <Form.Control type='Email' placeholder='Enter your Email'/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Your message for us *</Form.Label>
                                    <Form.Control as='textarea' placeholder='Enter your Email' rows={5}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <button id='send-message' type='submit'>Send message</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
            
        </>
    )
}
export default Contact;