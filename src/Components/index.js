import React from 'react';
import './public/style.css'
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
                            <Col xs={12} md={8} className='mx-auto' >
                                    <p id='italic'> Oh, hello, nice to meet you!</p>
                                    <p id='text-intro'>I AM B&W LANDING<br/> PAGE OR PORTFOLIO<br/> THEME.</p>
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