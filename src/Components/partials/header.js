import React from 'react';
import {Animated} from "react-animated-css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase} from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faNetworkWired} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons"

const Header = ()=>{
 return(
     <>
     <div>   
    
    <div className="header-main">

    <ul>
        <li><a href='' className="active"><span> <FontAwesomeIcon icon={faHome} /></span>Home</a></li>
        <li><a href=''><span > <FontAwesomeIcon icon={faUser} /></span>About</a></li>
        <li><a href=''> <span > <FontAwesomeIcon icon={faBriefcase} /></span>Services</a></li>
        <li><a href=''><span > <FontAwesomeIcon icon={faIdCard} /></span>Portfolio</a></li>
        <li><a href=''><span > <FontAwesomeIcon icon={faNetworkWired} /></span>Resume</a></li>
        <li><a href=''><span > <FontAwesomeIcon icon={faEnvelope} /></span>Conatct</a></li>
    </ul>
    </div>

    <div className="copy">
        <div >
            <ul className="d-flex justify-content-around">
                <li><a href=''  className="active"><span><FontAwesomeIcon icon={faInstagramSquare}  size = '1x'/></span></a></li>    
                <li><a href=''><span><FontAwesomeIcon icon={faTwitterSquare} size = '1x' /></span></a></li>    
                <li><a href=''><span><FontAwesomeIcon icon={faFacebookSquare} size = '1x' /></span></a></li>    
                <li><a href=''><span><FontAwesomeIcon icon={faGithubSquare} size = '1x' /></span></a></li>    
                <li><a href=''><span><FontAwesomeIcon icon={faLinkedin} size = '1x' /></span></a></li>    
            </ul>            
        </div>
        <p>2021 © Alaa Touati.<br/>
        All Right Reserved.</p>
    </div>

   </div>


    </>

 )

}

export default Header;