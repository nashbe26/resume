import React, { useEffect, useState } from 'react';
import { Container,Col,Row,Modal,Button} from 'react-bootstrap';
import Asap from './public/img/asap.png'
import Asap1 from './public/img/asap.jpg'
import Desklo from './public/img/desklo-new-logo.png'

const Portfolio = ()=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [url, setUrl] = useState([Asap1,Desklo]);
    console.log(url)
    const handleShow = () =>{
        setShow(true);
    } 
 


    return(
        <>
            <section className='pro-sec'>
            
                <Container>
                <p id='main-text'>PORTFOLIO</p>
                    <Row>
                        <Col md={4} xs={12}>
                        <div className='text-left'>
                           
                                <img src={Asap} alt='asaperuse' id='project-image' onClick={handleShow}/>
                          
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className='text-center'>
                               
                                    <img src={Desklo}className='pt-5' alt='Desklo' id='project-image' onClick={handleShow}/>
                                
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                        <div className='text-right'>
                           
                                <img src={Asap} alt='asaperuse' id='project-image' onClick={handleShow}/>
                            
                         </div>   
                        </Col>
                    </Row>
                </Container>
              
                    
                        <Modal show={show} onHide={handleShow}>
                            <Modal.Header closeButton  onClick={handleClose}>
                            <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                                <Modal.Body><img src={Asap1} style={{width:100+'%',height:'auto'}}/></Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    
             
            
        
            </section>
            
        </>
    )
}
export default Portfolio;