import styled from "styled-components";
import { FaPlayCircle } from "react-icons/fa";
import Pcard1pic from '../../../public/pics/Portfolio/Pcard1.jpg'
import Pcard2pic from '../../../public/pics/Portfolio/Pcard2.jpg'
import Pcard3pic from '../../../public/pics/Portfolio/Pcard3.jpg'


export const PlayCircle = styled(FaPlayCircle)`
    font-size: 3rem;
    color: #BA2C73;
    margin: 5rem auto 1rem auto;
`;

export const Pcard1 = styled.div`
    width: 350px;
    height: 500px;
    // border: 1px solid red;
    border-radius: 10px;
    margin:  10px auto;
    overflow: hidden;
    background: linear-gradient(0deg, rgba(0,0,0,0.9)0%,  rgba(108,122,137,0.5) 100%) ,url(${Pcard1pic}) center no-repeat;
    background-size:cover;
    box-sizing: border-box;
    padding: 2rem;
    color: white;
`;
export const Pcard2 = styled.div`
    width: 350px;
    height: 500px;
    // border: 1px solid red;
    border-radius: 10px;
    margin:  10px auto;
    overflow: hidden;
    background: linear-gradient(0deg, rgba(0,0,0,0.9)0%,  rgba(108,122,137,0.5) 100%) ,url(${Pcard2pic}) center no-repeat;
    background-size:cover;
    box-sizing: border-box;
    padding: 2rem;
    color: white;
`;
export const Pcard3 = styled.div`
    width: 350px;
    height: 500px;
    // border: 1px solid red;
    border-radius: 10px;
    margin:  10px auto;
    overflow: hidden;
    background: linear-gradient(0deg, rgba(0,0,0,0.9)0%,  rgba(108,122,137,0.5) 100%) ,url(${Pcard3pic}) center no-repeat;
    background-size:cover;
    box-sizing: border-box;
    padding: 2rem;
    color: white;
`;

export const Testimonialdiv = styled.div`
    width: 100%;
    padding: 30px 0;
    box-sizing: border-box;
`;

export const Tcontent= styled.div`
position: relative;
width: 1000px;
height: auto;
border-radius: 5px;
border: 1px solid white;
   
`;

export const TCarouselcontainer = styled.div` 
    display:flex;
    position: relative;
    width: 1200px;
    background: rgba(0,0,0,0.1);
    margin:auto;

    @media screen and (max-width: 1200px){
        width:100%;
        background:0;
    }

`;