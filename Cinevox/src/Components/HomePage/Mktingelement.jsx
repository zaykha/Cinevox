import styled from "styled-components";
import mktbg from "../../../src/pics/mkt/mktbg.jpg";
import { FaUserGraduate, FaDesktop, FaMoneyBillWave, FaUserClock } from "react-icons/fa";

export const MktDiv = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 80px;
    // height: 600px;
    background: linear-gradient(0deg, rgba(0,0,0,0.9)0%,  rgba(108,122,137,0.5) 100%) ,url(${mktbg}) center no-repeat;
`;
export const MktInner = styled.div`
    width: 1200px;
    margin: auto;
    padding-top: 3rem;
    @media screen and (max-width:1200px){
        width: 100%;
    }
`;
export const MktHeader = styled.div`
    width: 80%;
    font-size: 2rem;
    margin: auto;
    text-align: center;
    color: white;

    @media screen and (max-width: 1200px){
        font-size: 1.2rem;
    }
`;
export const MktCardholder= styled.div`
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    
    margin: 50px auto 0 auto;
    // height: 300px;
    // border: 1px solid red;
    @media screen and (max-width: 1200px){
        width: 100%;
    }
    
`;
export const Mktcard = styled.div`
    width: 550px;
    margin:  10px auto;
    height: 200px;
    background: linear-gradient(0deg, rgba(0,0,0,0.5)  0%,  rgba(108,122,137,0.5) 100%);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    text-align: center;
    box-sizing: border-box;
    padding: 50px;
    display: flex;
    align-items: center;
    // border: 1px solid green;

    @media screen and (max-width: 1200px){
        border: none;
    }
`;

export const MH2= styled.h2`
    color:#BA2C73;
    font-size: 1.5rem;
`;

export const Certified= styled(FaUserGraduate)`
font-size:8rem;
color:#BA2C73;

`;

export const Desktop= styled(FaDesktop)`
font-size:8rem;
color:#BA2C73;

`;

export const Affordable= styled(FaMoneyBillWave)`
font-size:8rem;
color:#BA2C73;

`;

export const Flexible= styled(FaUserClock)`
font-size:8rem;
color:#BA2C73;

`;


export const Mktcontent= styled.div`
    color: white;
    text-align: left;
    margin-left: 30px;
`;
