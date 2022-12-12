import styled from "styled-components";
import Mark from '../../pics/Profile/Mark1.png';
import Nyein from '../../pics/Profile/MaNyein1.png';
import Bro from '../../pics/Profile/Bro1.png';



export const Teamdiv = styled.div`
    width: 1200px;
    margin: 3rem auto;

    @media screen and (max-width: 1200px){
        width: 100%;
    }
`;
export const THeader = styled.div`
    color: white;
    text-align: center;
`;
export const Profile = styled.div`
    width: 100%;
    display:flex;
    flex-wrap: wrap;
`;
export const ProfileDiv = styled.div`
    display: none;
    background: linear-gradient(0deg, rgba(0,0,0,0.9)0%,  rgba(108,122,137,0.4) 100%);
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    overflow: hidden;
`;
export const PpicMark = styled.div`
    width: 300px;
    height:400px;
    margin: auto;
    border-radius: 10px;
    background: linear-gradient(0deg, rgba(0,0,0,0.2)0%,  rgba(108,122,137,0.2) 100%) ,url(${Mark}) center no-repeat;
    background-size: cover;
    box-shadow: 1px 1px 1px rgb(25,25,25);
    overflow:hidden;

    &:hover ${ProfileDiv}{
        display: block;
    }
`;
export const PpicBro = styled.div`
    width: 300px;
    height:400px;
    margin: auto;
    border-radius: 10px;
    background: linear-gradient(0deg, rgba(0,0,0,0.2)0%,  rgba(108,122,137,0.2) 100%) ,url(${Nyein}) center no-repeat;
    background-size: cover;
    box-shadow: 1px 1px 1px rgb(25,25,25);

`;
export const PpicNyein = styled.div`
    width: 300px;
    height:400px;
    margin: auto;
    border-radius: 10px;
    background: linear-gradient(0deg, rgba(0,0,0,0.2)0%,  rgba(108,122,137,0.2) 100%) ,url(${Bro}) center no-repeat;
    background-size: cover;
    box-shadow: 1px 1px 1px rgb(25,25,25);

`;

export const ProfileContent =styled.div`
   
    text-align: center;
    color:white;
   
    
`