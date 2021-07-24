import React, {  useState } from 'react';
import { Container,Col,Row,Modal,Button} from 'react-bootstrap';
import Asap1 from './public/img/check.jpg'
import Desklo from './public/img/desklo-new-logo.png'
import desklo1 from './public/img/desklo/1.png'
import desklo2 from './public/img/desklo/2.png'
import desklo3 from './public/img/desklo/3.png'
import asap1 from './public/img/asap/1.png'
import asap2 from './public/img/asap/2.png'
import asap3 from './public/img/asap/3.png'
import asap4 from './public/img/asap/4.png'
import asap5 from './public/img/asap/5.png'
import asap6 from './public/img/asap/6.png'
import uni1 from './public/img/uninet/1.png'
import uni2 from './public/img/uninet/2.png'
import uni3 from './public/img/uninet/3.png'
import uni4 from './public/img/uninet/4.png'
import uni5 from './public/img/uninet/5.png'
import { motion } from "framer-motion"

import uninet from './public/img/Sans-titre-1.png'
import Carousel from './partials/carousel'

const Portfolio = ()=>{
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [carOne, setCarOne] = useState([uni1,uni2,uni3,uni4,uni5]);
    const [carTwo, setcarTwo] = useState([desklo2,desklo3]);
    const [carThree, setcarThree] = useState([asap1,asap2,asap3,asap4,asap5,asap6]);

    const handleClose = () => setShow(false);
    const handleClose1 = () => setShow1(false);
    const handleClose2 = () => setShow2(false);
    const [url, setUrl] = useState([Asap1,Desklo]);
    console.log(url)
    const handleShow = () =>{
        setShow(true);
    } 
    const handleShow1 = () =>{
        setShow1(true);
    } 
    const handleShow2 = () =>{
        setShow2(true);
    }
    return(
        <>
            <section className='pro-sec'>
            
                <Container>
                <p id='main-text'>PORTFOLIO</p>
                    <Row >
                        <Col md={4} xs={12} className="p-6">
 
                        <div className='text-center shadow-box'>
                        <img src={uninet} alt='asaperuse' id='project-image' onClick={handleShow}/>

                          
                            </div>
                        </Col>
                        <Col md={4} xs={12} className="p-6">
                            <div className='text-center shadow-box'>
                                <img src={Desklo}className='' alt='Desklo' id='project-image' onClick={handleShow1}/>
                            </div>
                        </Col>
                        <Col md={4} xs={12} className="p-6">
                        <div className='text-center shadow-box'>
                        <img src={Asap1} alt='asaperuse' id='project-image' onClick={handleShow2}/>

                         </div>   
                        </Col>
                    </Row>
                    <Modal show={show} onHide={handleShow} className="w-100">
                            <Modal.Header closeButton  onClick={handleClose}>
                            <Modal.Title>Asapreuse</Modal.Title>
                            </Modal.Header>
                                <Modal.Body >                            
                                <Carousel images={carOne}></Carousel>
                                <p className="descrip-text"><span > Description: </span> Developping Asapreuse Front-end (2020) </p>
                                <p className="descrip-text"><span >Technologies: </span> HTML / CSS 3 / Bootstrap / Javascript / jQuery</p>
                                <a href="https://github.com/nashbe26/asap-project" className="descrip-text"><span>Github : </span>https://github.com/nashbe26/asap-project</a>
                                <a className="descrip-text"><span>Link: </span> https://github.com/nashbe26/Desklo</a>
                                </Modal.Body>
                        </Modal>
                        <Modal show={show1} onHide={handleShow1} className="w-100">
                            <Modal.Header closeButton  onClick={handleClose1}>
                            <Modal.Title>Desklo.in</Modal.Title>
                            </Modal.Header>
                                <Modal.Body>                            
                                <Carousel images={carTwo}></Carousel>
                                <p className="descrip-text"><span> Description: Front-End development of the Desklo site (2020)</span></p>
                                <p className="descrip-text"><span>Technologies: </span> HTML / CSS 3 / Bootstrap / Javascript / jQuery</p>
                                <a className="descrip-text"><span>Github: </span> https://github.com/nashbe26/Desklo</a>
                                </Modal.Body>
                        </Modal>
                        <Modal show={show2} onHide={handleShow2} className="w-100">
                            <Modal.Header closeButton  onClick={handleClose2}>
                            <Modal.Title>Uninet</Modal.Title>
                            </Modal.Header>
                                <Modal.Body>                            
                                <Carousel images={carThree}></Carousel>
                                <p className="descrip-text"><span>Description: </span>End of studies project (2021) Development of an academic social network for universities that introduces online learning in real time mode (webrtc) </p>
                                <a className="descrip-text"><span>Github Back-End: </span>https://github.com/nashbe26/IsammBokk</a>
                                <a className="descrip-text"><span>Github Front-End: </span>https://github.com/nashbe26/pfeFrontEnd</a>
                                <p className="descrip-text"><span>Technologies: </span>Nodejs / Angular 11 / Socket.io / webrtc / Expressjs / Mongi</p>
                                </Modal.Body>
                            

                        </Modal>
                </Container>
              
                    
                     
                    
             
                       
            </section>
            
        </>
    )
}
export default Portfolio;