import React, {  useRef, useState, useEffect } from 'react';
import { Container,Col,Row,Modal,Button} from 'react-bootstrap';
import useHover from './partials/useHover'

import Asap1 from './public/img/check.jpg'
import Desklo from './public/img/desklo-new-logo.png'
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

import uninet from './public/img/Sans-titre-1.png'
import Carousel from './partials/carousel'

const Portfolio = ()=>{
    const [overlay, setOverlay] = useState(true);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [carOne, setCarOne] = useState([uni1,uni2,uni3,uni4,uni5]);
    const [carTwo, setcarTwo] = useState([desklo2,desklo3]);
    const [enter, setEnter] = useState(true);
    const [carThree, setcarThree] = useState([asap1,asap2,asap3,asap4,asap5,asap6]);
    const div1 = useRef(null);
    const div2 = useRef(null);
    const div3 = useRef(null);
    const img1 = useRef(null);
   
    const handleClose = () => setShow(false);
    const handleClose1 = () => setShow1(false);
    const handleClose2 = () => setShow2(false);

    const handleShow = () =>{
        setShow(true);
 
    } 
    const handleShow1 = () =>{
        setShow1(true);

    } 
    const handleShow2 = () =>{
        setShow2(true);

    }
    function enterFun(){
        return setEnter(true) 
    }     
    
    return(
        <>
            <section className='pro-sec'>
                <Container>
                <p id='main-text' className="animate__animated animate__shakeY">PORTFOLIO</p>
                    <Row >
                        <Col  xs={12} sm={12} md={4} lg={4}  className="text-center  p-6" onClick={handleShow}>
                            <div className="shadow-box">
                            <img src={uninet} alt='asaperuse' ref={img1} id='project-image'  />

                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} className=" text-center  p-6" onClick={handleShow2}>
                            <div className="shadow-box">
                            <img  src={Asap1}alt='asaperuse' ref={img1} id='project-image'  className="pt-2"/>

                            </div>
                        </Col>
                        <Col  xs={12} sm={12} md={4} lg={4}className="text-center  p-6" onClick={handleShow1}>
                            <div className="shadow-box">
                            <img src={Desklo} alt='asaperuse' ref={img1} id='project-image'  />

                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} className="text-center p-6 mtop-5">
                            <div className="shadow-box">
                            <p className="p-3" id="filter-text">  More project are coming soon ...</p>

                            </div>
                        </Col>
                    </Row>
                    <Modal show={show} onHide={handleShow} className="w-100 modal-padding">
                            <Modal.Header closeButton  onClick={handleClose}>
                            <Modal.Title>Uninet</Modal.Title>
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
                            <Modal.Title>Desklo.in </Modal.Title>
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
                            <Modal.Title> Asapreuse</Modal.Title>
                            </Modal.Header>
                                <Modal.Body>                            
                                <Carousel images={carThree}></Carousel>
                                <p className="descrip-text"><span>Description: </span>End of studies project (2021) Development of an academic social network for universities that introduces online learning in real time mode (webrtc) </p>
                                <a className="descrip-text"><span>Github Back-End: </span>https://github.com/nashbe26/IsammBokk</a>
                                <a className="descrip-text"><span>Github Front-End: </span>https://github.com/nashbe26/pfeFrontEnd</a>
                                <p className="descrip-text"><span>Technologies: </span>Nodejs / Angular 11 / Socket.io / webrtc / Expressjs / MongoDB </p>
                                </Modal.Body>
                            

                        </Modal>
                </Container>
            </section>
            
        </>
    )
}
export default Portfolio;