import styled from "styled-components";

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
export const Vcard= styled.div`
    width: 350px;
    height: 400px;
    border: 1px solid red;
    border-radius: 10px;
    margin:  10px auto;

`;
