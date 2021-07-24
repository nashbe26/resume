import React, { useEffect } from 'react';
import './public/style.css'
import {Animated} from "react-animated-css";
import me from "./public/img/me2.jpg"
import {Col,Row,Container} from 'react-bootstrap';
import Header from './partials/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Index = ()=>{
    useEffect(()=>{
        console.log(
            window.innerWidth
        );
    },[])
    return(
        <>
        <div className={ window.innerWidth <= 768 ? "navBar-header" : "d-none" }>
            <h2>Alaa Taouti</h2>
            <a className=""><FontAwesomeIcon icon={faBars} /></a>
        </div>
                <div className="resumeProfil">
                    <img src={me} alt="Alaa Touati" id="myImage"/>   
                    <Header></Header>                 
                </div>
        
         <Row >              
            <Col  md={12} xs={12} className="nopadding">
        
             <section className='intro'>
                <div className='image-header'>
                <div className='overlay'>
                </div>
                
                <div className='content'>
                    <Container className='clear-sides'>
                        <Row >
                            <Col xs={12} md={8} className='mx-auto ' id="text-header">
                            
                                <Animated animationIn="animationOut " animationOut="fadeOut" isVisible={true}>
                                    <p id='italic'> Oh, hello, nice to meet you!</p>
                                    <p id='text-intro'>I AM ALAA TOUATI Full Stack Web<br/> Developer.</p>

                                </Animated>
                                    <p id='italic'>I am a full stack web developer, developing your web application in a perfect way.</p>
                            </Col>
                        </Row>
                    </Container>            
                </div>
            </div>
        </section>    
                            </Col>
     
       
        </Row>
        </>
    )
}

export default Index;