import React from 'react';
import Header from './Components/index';
import Navbar from './Components/partials/navbar';
import AboutMe from './Components/AboutMe';
import Service from './Components/Services';
import Portfolio from './Components/portfolio';
import './App.css'
import Contact from './Components/contact';
import Footer from './Components/partials/footer';
const App =()=>{

return(
  <>
    <Header></Header>
    <Navbar></Navbar>

    <AboutMe></AboutMe>
    <Service></Service>
    <Portfolio></Portfolio>
    <Contact></Contact>
    <Footer></Footer>
  </>
)}
export default App;
