import React, { useState } from 'react'
import { AboutBg } from '../About/introelement';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../SidebarMenu/Sidebar';
import Pintro from './Pintro';

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const togglesidebar = () => {
     setIsOpen(!isOpen);}
  return (
    <AboutBg>
    <Sidebar isOpen={isOpen} togglesidebar={togglesidebar}/>
      <Navbar togglesidebar={togglesidebar}/>
      <Pintro/>
    <Footer/>
  </AboutBg>
  )
}

export default Portfolio