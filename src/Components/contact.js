import React, { useEffect, useState,useRef } from 'react';
import {Container, Form,Col,Row} from 'react-bootstrap';
import {Animated} from "react-animated-css";


const Contact = ()=>{
    const [name,setName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [check,setCheck] = useState(false);
    const [spanName,setSpanName] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [DivAnimate, setDivAnimate] = useState('');
    function handelSubmit(){
       
        
    }
  
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef = useRef(null)
    function handleSubmit (){
        if(name.length == 0)
            setSpanName( <span>Error</span>)
        else{
            setSpanName( <span></span>)
        }
        
    }
    function handleAnim (){
        console.log(DivAnimate);
        if(animate){
            
            setDivAnimate( 
                <div class="alert alert-primary">
                    You just sent an Email, Nice ! 
                </div>
               )
                setTimeout(() => {
                    setDivAnimate( <span></span>)
                    setAnimate(false)
                }, 3000);
        }
        else{
            setDivAnimate( <span></span>)
        }
        
    }
    useEffect(()=>{
        handleSubmit()
        },[lastName])
        useEffect(()=>{
            handleAnim()
        },[animate])
    return(
        <>
        <section id='about-meq'>
             <Container>
                <p id='main-text' className="animate__animated animate__shakeY">CONTACT</p>
                <Row className='justify-content-center pt-5'>
                    <Col md={8} xs={12}>
                        <Row>
                            <Col md={6} xs={12}>
                            <Form.Group>
                                <Form.Label>Your First Name</Form.Label>
                                <Form.Control type='email' required ref={firstNameRef} placeholder='Enter your firstname' onChange={(e) => setName(e.target.value)}/>
                            </Form.Group>
                            </Col>
                            <Col md={6} xs={12}>
                            <Form.Group>
                                <Form.Label>Your Last Name</Form.Label>
                                <Form.Control type='text' ref={lastNameRef} placeholder='Enter your lastname' name="lastName" onChange={(e) => setLastName(e.target.value)}/>
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label>Your Last Name</Form.Label>
                                    <Form.Control type='Email' ref={emailRef} placeholder='Enter your Email' name="email" onChange={(e) => setEmail(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Your message for us *</Form.Label>
                                    <Form.Control as='textarea' ref={messageRef} placeholder='Enter your Email' rows={5} name="message" onChange={(e) => setMessage(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Row>
                {DivAnimate}                        
<Row>
                            <Col md={12}>
                                <button id='send-message' type='submit' onClick={()=> setAnimate(true)}>Send message</button>
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