import React from 'react'
import { AHero, AHerodiv } from '../About/Introelement'
import { Lh3 } from '../HomePage/HeroCompelement'
import { Ccard, CCards, Cframediv, CHeader, Ciframe, Cimg, COuterDiv } from './ContactIntroelements';
import callus from '../../assets/pics/ContactUs/callus.png';
import email from '../../assets/pics/ContactUs/email.png';
import location from '../../assets/pics/ContactUs/location.png';


const ContactIntro = () => {
    
  return (
    <>
     <AHero>
        <AHerodiv>
            <h1>Contact us</h1>
            <h3>Get in touch and let us know how we can help</h3>
        </AHerodiv>
    </AHero>
    <COuterDiv>
        <CHeader>
            <Lh3>GET IN TOUCH</Lh3>
            <h2>Have any questions?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, lectus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </CHeader>
        <CCards>
            <Ccard>
                <Cimg src={callus}/>
                <h2>Loctions</h2>
                
                <p>Bukit Batok Street 22, 650299, Singapore</p>
               
            </Ccard>
            <Ccard>
            <Cimg src={email}/>


                 <h2>Email us</h2>
                <p>Support@Cenevox.tld             admin@Cenevox.tld</p>
                
            </Ccard>
            <Ccard>
            <Cimg src={location}/>


                <h2>Call us</h2>
                <p>+658788848185</p>
               
            </Ccard>
        </CCards>
    </COuterDiv>
    <Cframediv>
    <Ciframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7319148128954!2d103.75766381472413!3d1.337109299024796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da106e3b01511d%3A0xca8808d2438fcb86!2s21%20Bukit%20Batok%20Cres%2C%20%2320-73%2F74%20Wcega%20Tower%2C%20Singapore%20658065!5e0!3m2!1sen!2smm!4v1671432354879!5m2!1sen!2smm"
     width="1200" 
     height="450" 
     allowfullscreen="" 
     loading="lazy" 
     referrerpolicy="no-referrer-when-downgrade"></Ciframe> 
     </Cframediv>

    <CHeader>
        <h1>Send us a message</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    </CHeader>

    </>
  )
}

export default ContactIntro