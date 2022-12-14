import styled from "styled-components";

export const SliderContainer = styled.div`
    width: 600px;
    // height: 300px;
    margin: 0 auto;
    position: relative;
    
    @media screen and (max-width: 1200px;){
        width:100%;
    }
`;
export const Slide = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 40px;
    height: 250px;
    border: 1px solid white;
    color: white;
    text-align: center;
    border-radius: 10px;
`;
export const LeftArrow = styled.div`
    position:absolute;
    top:45%;
    transform: translate(0,-50%);
    left: 0;
    font-size: 2rem;
    color: white;
    z-index: 20;
    cursor: pointer;

`;
export const RightArrow = styled.div`
    position:absolute;
    top:45%;
    transform: translate(0,-50%);
    right: 0;
    font-size: 2rem;
    color: white;
    z-index: 20;
    cursor: pointer;

`;
export const Dotdiv = styled.div`
    width: 400px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items:center;
    margin: 30px auto;
    z-index: 20;
    border: 1px solid white;
`;

export const Dot = styled.div`
    margin: 0 3px;
    cursor: pointer;
    font-size: 20px;
    color: white;
`
export const SlideProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    // border: 1px solid white;
`;
export const SIMG = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid white;
    margin-right: 14px;
`;
export const SContent = styled.div`
    text-align: left;
`;
export const SH3 = styled.div`
    font-size: 1.1rem;
    color:#BA2C73;
`;
export const STTL = styled.div``;