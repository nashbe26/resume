import React from 'react';
import {Nav, Navbar,Container} from 'react-bootstrap';


const Navbars = ()=>{
    window.addEventListener('scroll', function(){
     
        if (window.scrollY > window.innerHeight){
            document.getElementById('navbar').classList.add("fixed-top");
        } else {
          document.getElementById('navbar').classList.remove("fixed-top");
        }
        
})
     
    return(
        <Navbar id='navbar'  >
            <Container>
                <Navbar.Brand href='#home'>
                    <h3 style={{fontFamily:"Cardo, sans-serif",fontStyle: 'italic'}}>Alaa Eddine Touati</h3>
                </Navbar.Brand>
                <Nav className='ml-auto' style={{fontFamily:"Cardo, sans-serif",fontStyle: 'italic'}}>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#features'>About</Nav.Link>
                    <Nav.Link href='#Services'>Services</Nav.Link>
                    <Nav.Link href='#Portfolio'>Portfolio</Nav.Link>
                    <Nav.Link href='#Text'>Text</Nav.Link>
                    <Nav.Link href='#Contact'>Contact</Nav.Link>
                </Nav>
            </Container>
            
        </Navbar>
    )
}
export default Navbars;