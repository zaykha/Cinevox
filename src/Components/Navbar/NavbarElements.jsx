import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";


export const Nav = styled.nav`
    font-family:'Fredoka', sans-serif;
    // background: rgba(0,0,0,0);
    height: 60px;
   margin: auto;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-item: center;
    font-size: 1.3rem;
    position: sticky;
    top:0;
    z-index: 10;
    background: linear-gradient(90deg, rgba(9,11,50,1) 0%, rgb(25,28,38) 100%);
    
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    // border: 1px solid red;
`;

export const NavLogo= styled(LinkR)`
    color:  #fbae1a;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    // margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    border-radius: 5px;

    // background: rgba(225,225,225,0.8);
    // clip-path: ellipse(84% 100% at 52.38% 0%);
   
`;

export const Imgicon= styled.div`
    position: relative;
    left: 0px;
    // background: white;
    &:hover{
        color:#000;
    }
    // border: 1px solid red;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-item: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    // text-shadow: 1px 2px black;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;

`
export const IMGTAG = styled.img`
filter: invert(24%) sepia(56%) saturate(2532%) hue-rotate(304deg) brightness(93%) contrast(91%);
`;
export const NavLinks = styled(LinkR)`
    color:#BA2C73;
    
    display: flex;
    align-item: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    
    &:hover{
        color: #fff;
    }

    &.active{
        border-bottom: 3px solid #fbae1a;
    }
`

