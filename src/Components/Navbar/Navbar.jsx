import React from 'react';

import {FaBars} from 'react-icons/fa';
import { IMGTAG, Nav, NavbarContainer, NavLogo, Imgicon, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import logo from '../../assets/cinevoxlogo-removebg-preview.png';
const Navbar = ({togglesidebar}) => {
  return (
     <>
     <Nav>
        <NavbarContainer>
            <NavLogo to='/'>
              <Imgicon>
                <IMGTAG src={logo} alt='logo' width='200px' />
                </Imgicon>
            </NavLogo>
                <MobileIcon onClick={togglesidebar}>
                  <FaBars />
                </MobileIcon>

                  <NavMenu>
                    <NavItem>
                      <NavLinks to='/'>Home</NavLinks>
                    </NavItem>

                    <NavItem>
                      <NavLinks to='/About'>About</NavLinks>
                    </NavItem>

                    <NavItem>
                      <NavLinks to='/Portfolio'>Portfolio</NavLinks>
                    </NavItem>

                    <NavItem>
                      <NavLinks to='/ContactUs'>Contact US</NavLinks>
                    </NavItem>

                    {/* <NavItem>
                      <NavLinks to='/cart'>Cart</NavLinks>
                    </NavItem> */}

                  </NavMenu>          
        </NavbarContainer>
        </Nav>
     </>
  );
};

export default Navbar;
