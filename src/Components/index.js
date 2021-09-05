import React, { useEffect, useState } from 'react';
import './public/style.css'
import {Animated} from "react-animated-css";
import me from "./public/img/me2.jpg"
import {Col,Row,Container} from 'react-bootstrap';
import Header from './partials/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Index = ()=>{
    const [value ,setValue] = useState(true)
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            document.getElementById('proff').classList.add('d-none')
            if (window.innerWidth <= 768){
                document.getElementById('proff').classList.remove('d-none')
            }
        })
        
       },[])
       useEffect(()=>{
           if(value == true){
            document.getElementById('icon-select').addEventListener('click',()=>{
                document.getElementById('proff-1').style.display="block"
            })
           }else{
            document.getElementById('icon-select').addEventListener('click',()=>{
                document.getElementById('proff-1').style.display="none"
            })
           }
    },[value])
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
        })
    },[])
    return(
        <>
        <div class="d-none " id="proff">
            <div className="navBar-header" >
                <h2>Alaa Taouti</h2>
                <a  onClick={()=>setValue(!value) } id="icon-select"><FontAwesomeIcon icon={faBars} /></a>
            </div>
        </div>

        <Animated animationIn="slideInLeft" animationOut="slideOutRight" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>

                <div className="resumeProfil-n" id="proff-1">
                    <img src={me} alt="Alaa Touati" id="myImage"/>   
                    <Header></Header>                 
                </div>
        </Animated>        
         <Row >              
            <Col  md={12} xs={12} className="nopadding">
        
             <section className='intro'>
                <div className='image-header'>
                <div className='overlay'>
                </div>
                
                <div className='content'>
                    <Container className='clear-sides'>
                        <Row >
                            <Col xs={12} md={8} className='mx-auto animate__animated animate__jackInTheBox animate__slow' id="text-header">
                            
                                    <p id='italic'> Oh, hello, nice to meet you!</p>
                                    <p id='text-intro'>I AM ALAA TOUATI Full Stack Web<br/> Developer.</p>

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