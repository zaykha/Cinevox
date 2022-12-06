import styled from "styled-components";

export const VidDiv= styled.video`
position: fixed;
right: 0;
bottom: 0;
min-width: 100vw; 
min-height: 100vh;
z-index:-4;

`;

export const Overlay = styled.div`
position: fixed;
right: 0;
bottom: 0;
min-width: 100vw; 
min-height: 100vh;
z-index:-1;
&:before{
    content: '';
    position: absolute;
    filter: blur(5px);
    background: rgba(25, 29, 50, 0.7);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
`;

export const Herodiv = styled.div`
        width: 50%;
        color: #fff;
        // height: 20vh;
        position:relative;
        // right: -50%;
        
        margin: 5vh auto;
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        // background-color: rgba(0,0,0,0.8);
        border-radius:10px;

        @media screen and (max-width: 1200px){
            width: 80%;
            right: 0;
            // padding: 5px;
        }
`;

export const HeroPhrase = styled.h1`
        z-index: 1;
        
        font-size:6rem;
        font-weight: bold;
        background: -webkit-linear-gradient(#fbae1a, #BA2C73);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position:relative;
       
        // margin: auto;
        // text-shadow: 1px 2px black;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        
        @media screen and (max-width: 960px){
        font-size: 2.1rem;
        // top: 80px;
        
    }
`;

export const HeroP = styled.div`
        width: 100%;
        position:relative;
        font-size: 1.2rem;
        
        margin:0 auto 4rem;
        text-shadow: 1px 2px black;
        @media screen and (max-width: 960px){
            font-size: 1rem;
            // top: 80px;
            
        }

`;
export const PromoDiv = styled.div`
        width: 1200px;
        height: 400px;
        display: flex;
        margin: 10px auto;
        position: relative;
        // border: 1px solid red;

        @media screen and (max-width: 1200px){
            width: 100%;
            flex-wrap: wrap;
        }

`;
export const PromoComponents = styled.div`
    width:380px;
    height:200px;
    margin: 15px auto;
    color:white;
    padding: 20px;
    box-sizing:border-box;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    // backdrop-filter: blur(5px);
    // -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const LandingDiv = styled.div`

        width: 100%;
        background: linear-gradient(0deg, rgba(0,4,52,0.9) 0%, rgba(0,0,0,1) 100%);
        margin: -20vh 0 0 0;
        // border: 1px solid red;
`;
export const LContentDiv1 = styled.div`
        width: 1200px;
        height: 400px;
        margin: auto;
        position: relative;
        top:5rem;
        display: flex;
    @media screen and (max-width:1200px){
        width: 100%;
    }

`;
export const LContent = styled.div`
    width: 600px;
    height: 300px;
    margin: auto;
    box-sizing: border-box;
    padding: 2rem 3rem;
    color: white;
    // border: 1px solid red;

    @media screen and (max-width: 1200px){
        width: 100%;
    }
`;
export const Lh3 = styled.h3`
    color: #BA2C73;
`;

export const Lmedia = styled.video`
    width: 568px;
    height: 300px;
    margin: auto;
    border: 1px solid grey;
    border-radius: 10px;
    // box-sizing: border-box;

`;

export const LcontentDiv2 = styled.div`
    width: 1200px;
    // height: 400px;
    margin:  3rem auto 0 auto;
    box-sizing: border-box;
    padding: 3rem;
    // background: linear-gradient(0deg, rgba(0,4,52,0.9) 0%, rgba(0,0,0,0.8) 100%);


    @media screen and (max-width:1200px){
    width: 100%;
}

`;

export const Lheader = styled.div`
    text-align: center;
    color: white;
`;
export const Lgrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    // border: 1px solid green;
`;
export const GlossCard = styled.div`
    width: 350px;
    margin: 10px auto;
    height: 300px;
    background: linear-gradient(0deg, rgba(0,0,0,0.5)  0%,  rgba(108,122,137,0.5) 100%);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    padding: 1rem;
    color: white;

    // border: 1px solid red;
`;
export const GlossImg = styled.img`
    width: 50px;
    // height: 50px;
`;