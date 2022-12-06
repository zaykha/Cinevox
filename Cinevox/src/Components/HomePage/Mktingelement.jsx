import styled from "styled-components";
import mktbg from "../../../src/pics/mkt/mktbg.jpg"

export const MktDiv = styled.div`
    width: 100%;
    height: 400px;
    background: linear-gradient(0deg, rgba(0,0,0,0.9)0%,  rgba(108,122,137,0.4) 100%) ,url(${mktbg}) center no-repeat;
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
`;
export const MktCardholder= styled.div``;
export const Mktcard = styled.div``;

