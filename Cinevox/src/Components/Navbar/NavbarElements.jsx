import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";


export const Nav = styled.nav`
    font-family:'Fredoka', sans-serif;
    background: rgba(0,0,0,0);
    height: 80px;
   margin: auto;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-item: center;
    font-size: 1.3rem;
    position: sticky;
    top:0;
    z-index: 10;
    // background: white;
    // box-shadow: 1px 1px black;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    // border: 1px solid red;
`;

export const NavLogo= styled(LinkR)`
    // color:  #fbae1a;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    // margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    // filter: invert(75%) sepia(86%) saturate(2521%) hue-rotate(347deg) brightness(108%) contrast(97%);
    // background: white;
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
filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(320deg) brightness(96%) contrast(104%);
`;
export const NavLinks = styled(LinkR)`
    color: #404040;
    // color: white;   
    display: flex;
    align-item: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    
    &:hover{
        color: #fn129d;
    }

    &.active{
        border-bottom: 3px solid #fbae1a;
    }
`