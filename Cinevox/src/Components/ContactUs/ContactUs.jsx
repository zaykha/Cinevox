import React,{useState} from 'react'
import { AboutBg } from '../About/introelement';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../SidebarMenu/Sidebar';
import ContactForm from './Contactform';

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const togglesidebar = () => {
     setIsOpen(!isOpen);
 
  }  
  return (
    <AboutBg>
      <Sidebar isOpen={isOpen} togglesidebar={togglesidebar}/>
      <Navbar togglesidebar={togglesidebar}/>
      <ContactForm/>
      <Footer/>
    </AboutBg>
  )
}

export default ContactUs