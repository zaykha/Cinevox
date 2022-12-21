import React, { useState } from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../SidebarMenu/Sidebar';
import Intro from './Intro';
import { AboutBg } from './Introelement';
import OurTeam from './OurTeam';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const togglesidebar = () => {
     setIsOpen(!isOpen);
 
  }  
  return (
    <AboutBg>
      <Sidebar isOpen={isOpen} togglesidebar={togglesidebar}/>
      <Navbar togglesidebar={togglesidebar}/>
      <Intro/>
      <OurTeam/>
      <Footer/>
    </AboutBg>
  )
}

export default About