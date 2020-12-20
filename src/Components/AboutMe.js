import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import './style.css'
import Image from './public/img/sec-img.jpg'
const AboutMe = ()=>{
    return(
        <>
        <section id='about-meq'>
            <Container>
                    <Row>
                        <Col md={6} xs={12} >
                            <div className='content-aboutme'>
                                <h2 id='main-text'>ABOUT ME</h2>
                            </div>
                            <div>
                                <h4 id='about-letter'>This can be an about section.</h4>
                                <p id='about-text'>Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am. Voice hours young woody has she think equal. Estate moment he at on wonder at season little. Six garden result summer set family esteem nay estate. End admiration mrs unreserved discovered comparison especially invitation.<br/><br/>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.
                                </p>
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
     
            
        </>
    )
}
export default AboutMe