import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../SidebarMenu/Sidebar';
import HeroComp from './HeroComp';
import Mkting from './Mkting';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const togglesidebar = () => {
     setIsOpen(!isOpen);
 
  }  
  return (
    <>
      <Sidebar isOpen={isOpen} togglesidebar={togglesidebar}/>
      <Navbar togglesidebar={togglesidebar}/>
      <HeroComp/>
      <Mkting/>
    </>
  )
}

export default HomePage