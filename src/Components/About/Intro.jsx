import React from 'react';
import { AHero, AHerodiv, Value, VHeader, Vcarddiv, Vcard1, Vcard2, Vcard3, Camera, Lightbulb, Chessboard } from './introelement';
import { LContent, LContentDiv1, Lh3, Lmedia } from '../HomePage/HeroCompelement';
import video1 from '/Hero-video.mp4';



const Intro = () => {
  return (
    <>
    <AHero>
        <AHerodiv>
            <h1>About us</h1>
            <h3>Video is the future of communication.</h3>
        </AHerodiv>
    </AHero>
    <LContentDiv1>
            <LContent>
                <Lh3>WHO WE ARE</Lh3>
                <h2>Video Production that's creative and affordable</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </LContent>
            <Lmedia muted>
                <source src={video1} type="video/mp4"/>
                 Your browser does not support HTML5 video.
            </Lmedia>
        </LContentDiv1>
    <Value>
        <VHeader>
            <Lh3>OUR VALUE</Lh3>
            <h1>We make videos that move people.</h1>
        </VHeader>
        <Vcarddiv>
            <Vcard1>
                <Lightbulb/>
                <h2>VISION</h2>
                <p>"Inceptos sed cubilia in nibh vel id potenti odio consectetur eros vehicula"
                </p>
            </Vcard1>
            <Vcard2>
                <Camera/>
                <h2>MISSION</h2>
                <p>"Inceptos sed cubilia in nibh vel id potenti odio consectetur eros vehicula"
                </p>
            </Vcard2>
            <Vcard3>
                <Chessboard/>
                <h2>MOTTO</h2>
                <p>"Inceptos sed cubilia in nibh vel id potenti odio consectetur eros vehicula"
                </p>

            </Vcard3>
        </Vcarddiv>

    </Value>

    </>
  )
}

export default Intro