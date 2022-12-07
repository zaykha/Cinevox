import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaViber, FaTelegram } from 'react-icons/fa';
import { FATag, Ftopcompartment, Footercontainer, Fcontent, FCopyright, Frow } from './Footerelement';

const Footer = () => {
  return (
    <Footercontainer>
        <Ftopcompartment>
            <Fcontent>
                <h1>CINEVOX</h1>
                <FATag to='/about'>About Us</FATag>
                <FATag to='/'>Career</FATag>
                <FATag to='/'>Terms and condition</FATag>
                <FATag to='/'>Licenses</FATag>
            </Fcontent>
            <Fcontent>
                
                <h1>CONTACT</h1>
                <p>contact@cinevox.com</p>
                <p>+95973515248, +951228496</p>
                
                <Frow>
                <FATag to="/"><FaFacebook/></FATag>
                <FATag to="/"><FaInstagram/></FATag>
                <FATag to="/"><FaTwitter/></FATag>
                <FATag to="/"><FaViber/></FATag>
                <FATag to="/"><FaTelegram/></FATag>
        
                </Frow>
            </Fcontent>
            <Fcontent>
                <h1>Address</h1>
                <p>sollicitudin viverra nunc gravida interdum nim facilisi magnis massa integer mi inceptos </p>
                
            </Fcontent>
        </Ftopcompartment>
        <FCopyright>All rights reserved <span>&#169;</span>Cinevox 2023 </FCopyright>
        {/* <Fbg src={require('../../assets/footerblack.png')} /> */}
    </Footercontainer>
  )
}

export default Footer