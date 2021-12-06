import React from "react"
import './redes.css'
import Facebook from '../../images/facebook.png'
import Instagram from '../../images/instagram.png'
import Twitter from '../../images/twitter.png'
import Whatsapp from '../../images/whatsapp.png'
import Linkedin from '../../images/linkedin.png'

const Redes = () => {
    return ( 
    
    <>
        <div className="follow-us" id = "footer1">
        <h3> CONTACTOS </h3> 
        <div className="social-media">
            <a href = "https://www.facebook.com/" > <img src = { Facebook } alt = "facebook" /> </a> 
            <a href = "https://www.instagram.com/" > <img src = { Instagram }alt = "instagram"/> </a> 
            <a href = "https://twitter.com/" > <img src = { Twitter } alt = "twitter" /> </a> 
            <a href = "https://web.whatsapp.com/" > <img src = { Whatsapp } alt = "whatsapp" /> </a> 
            <a href = "https://linkedin.com/" > <img src = { Linkedin } alt = "linkedin" /> </a> 
        </div> 
        </div> 
        </>
    );
}

export default Redes;