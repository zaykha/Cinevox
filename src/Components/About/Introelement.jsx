import styled from "styled-components";
import Vcard1jpg from '../../assets/pics/About/Vcard1.jpg';
import Vcard2jpg from '../../assets/pics/About/vcard2.jpg';
import Vcard3jpg from '../../assets/pics/About/Vcard3.jpg';
import { FaLightbulb, FaCamera, FaFont } from "react-icons/fa";

export const AHero= styled.div`
    width: 100%;
    padding: 30px 0;
    box-sizing: border-box;
`;

export const AHerodiv= styled.div`
    width: 1200px;
    text-align: center;
    color: white;
    margin: auto;
    background: linear-gradient(0deg, rgba(0,0,0,0.5)0%,  rgba(108,122,137,0.5) 100%);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);

    @media screen and (max-width:1200px){
        width: 100%;
    }


`;

export const AboutBg= styled.div`
background: linear-gradient(0deg, rgba(0,8,52,0.9) 0%, rgba(0,0,0,1) 100%);
`;

export const Value= styled.div`
    width: 100%;
`;
export const VHeader= styled.div`
    width: 1200px;
    margin: auto;
    color: white;
    text-align: center;

    @media screen and (max-width:1200px){
        width:100%;
    }
`;
export const Vcarddiv= styled.div`
    width: 1200px;
    margin: 20px auto;
    display: flex;
    flex-wrap:wrap;
    @media screen and (max-width:1200px){
        width:100%;
}
`;
export const Lightbulb = styled(FaLightbulb)`
    font-size:5rem;
    color:#BA2C73;
    margin: 5rem auto 2rem 200px;
`;
export const Camera = styled(FaCamera)`
    font-size:5rem;
    color:#BA2C73;
    margin: 5rem auto 2rem auto ;
`;
export const Chessboard = styled(FaFont)`
    font-size:5rem;
    color:#BA2C73;
    margin: 5rem 200px 2rem auto;
`;
export const Vcard1= styled.div`
    width: 350px;
    height: 500px;
    // border: 1px solid red;
    border-radius: 10px;
    margin:  10px auto;
    overflow: hidden;
    background: linear-gradient(0deg, rgba(0,0,0,0.9)0%,  rgba(108,122,137,0.5) 100%) ,url(${Vcard1jpg}) center no-repeat;
    background-size:cover;
    text-align:right;
    box-sizing: border-box;
    padding: 2rem;
    color: white;
`;

export const Vcard2= styled.div`
    width: 350px;
    height: 500px;
    // border: 1px solid red;
    border-radius: 10px;
    margin:  10px auto;
    background: linear-gradient(0deg, rgba(0,0,0,0.9)0%,  rgba(108,122,137,0.5) 100%) ,url(${Vcard2jpg}) center no-repeat;
    text-align:center;
    box-sizing: border-box;
    padding: 2rem;
    color: white;
`;
export const Vcard3= styled.div`
    width: 350px;
    height: 500px;
    // border: 1px solid red;
    border-radius: 10px;
    margin:  10px auto;
    background: linear-gradient(0deg, rgba(0,0,0,0.9)0%,  rgba(108,122,137,0.5) 100%) ,url(${Vcard3jpg}) center no-repeat;
    text-align:left;
    box-sizing: border-box;
    padding: 2rem;
    color: white;
`;
