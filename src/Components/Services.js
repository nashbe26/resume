import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import Front from './public/img/Front.png'
import Back from './public/img/backend.png'
import Seo from './public/img/seo.png'
const Servive = ()=>{
    return(
        <>
        <section className='service-sec'>
            <Container>
                <p id='main-text'>SERVICES</p>
                <Row>
                    <Col md={4} xs={12}>
                        <div className='icon'>
                             <img src={Front} alt='front-end' />
                        </div>
                        <p id='text-filter' className='h5 animate__flipInX'>Front End Development</p>
                        <p id='filter-text'>Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
                    </Col>
                    <Col md={4} xs={12}>
                        <div className='icon'>
                            <img src={Back} alt='front-end' />
                        </div>    
                        <p id='text-filter' className='h5 animate__flipInX' >Back End Development</p>
                        <p id='filter-text'>Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
                    </Col>
                    <Col md={4} xs={12}>
                        <div className='icon'>
                            <img src={Seo} alt='front-end animate__flipInX' />
                        </div>
                        <p id='text-filter'className='h5'>SEO AND SEM</p>
                        <p id='filter-text'>Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
                    </Col>
                </Row>
            </Container>
        </section>

        </>
    )
}
export default Servive;