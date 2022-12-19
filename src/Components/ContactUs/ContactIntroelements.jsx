import styled from "styled-components";

export const COuterDiv= styled.div`
    width: 1200px;
    margin: auto;

    @media screen and (max-width: 1200px){
        width: 100%:
    }
`;
export const CHeader= styled.div`
    width: 60%;
    margin: auto;
    text-align: center;
    color: white;
`;
export const CCards= styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 6rem;
`;
export const Ccard= styled.div`
    width: 26%;
    margin: auto;
    color: white;
    text-align: center;
    box-sizing:border-box;
    padding: 20px;
    height: 200px;
    border-radius: 10px;   
    background: linear-gradient(0deg, rgba(0,0,0,0.5)0%,  rgba(108,122,137,0.5) 100%);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
 
`;
export const Cimg = styled.img`
    width: 6rem;
    position: relative;
    margin-top: -5rem;
`;  
export const Cframediv= styled.div`
    width:1200px;
    // height: 400px;
    margin: auto;
    // border: 1px solid red;
`

export const Ciframe = styled.iframe`
    border-radius: 15px;
    margin: 3rem auto;
`