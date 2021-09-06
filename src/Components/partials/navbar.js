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
        <Navbar  collapseOnSelect  expand="lg"  sticky="top" id='navbar'>
            <Container>
            <div className="pt-4">  

                <Navbar.Brand href='#home' style={{paddingTop:"10px"}}>
                        <h3 style={{display:"flex",alignContent:"center",fontFamily:"Cardo, sans-serif",fontStyle: 'italic',paddingTop:"10px"}}>Alaa Eddine Touati</h3>
                </Navbar.Brand>
                </div>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ml-auto' style={{fontFamily:"Cardo, sans-serif",fontStyle: 'italic'}}>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#features'>About</Nav.Link>
                    <Nav.Link href='#Services'>Services</Nav.Link>
                    <Nav.Link href='#Portfolio'>Portfolio</Nav.Link>
                    <Nav.Link href='#Text'>Text</Nav.Link>
                    <Nav.Link href='#Contact'>Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    )
}
export default Navbars;