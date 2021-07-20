import React from 'react';
import './public/style.css'
import {Animated} from "react-animated-css";
import { motion } from "framer-motion"
import {Col,Row,Container} from 'react-bootstrap';

const Index = ()=>{
    return(
        <>
        <section className='intro'>
            <div className='image-header'>
                <div className='overlay'>
                </div>
                <div className='content'>
                    <Container className='clear-sides'>
                        <Row >
                            <Col xs={12} md={8} className='mx-auto ' >
                                <Animated animationIn="animationOut " animationOut="fadeOut" isVisible={true}>
                                    <p id='italic'> </p>
                                    <motion.p   animate={{ x: 100 }}
  transition={{ ease: "easeOut", duration: 2 }}>
Oh, hello, nice to meet you!
  </motion.p>
                                    <p id='text-intro'>I AM B&W LANDING<br/> PAGE OR PORTFOLIO<br/> THEME.</p>

                                </Animated>
                                    <p id='italic'>I am a ready to be your portfolio, telling your stories and short presentations.</p>
                            </Col>
                        </Row>
                    </Container>            
                </div>
            </div>
        </section>    
        </>
    )
}

export default Index;