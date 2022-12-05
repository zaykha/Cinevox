import React from 'react'
import { Herodiv, HeroP, HeroPhrase, LandingDiv, LContent, LContentDiv1, LcontentDiv2, Lmedia, Overlay, PromoComponents, PromoDiv, VidDiv } from './HeroCompelement';
import video from '../../../src/H123.mp4';

const HeroComp = () => {
  return (
    <>
    <VidDiv autoPlay loop muted>
        <source src={video} type="video/mp4"/>
         Your browser does not support HTML5 video.
    </VidDiv>
    <Overlay/>
    <Herodiv>
    <HeroPhrase>
    Bringing your ideas to life through motion
    </HeroPhrase>
    <HeroP>At our video production company, we know how important it is to get the perfect shot – for you and your clients.</HeroP>
    </Herodiv>
    <PromoDiv>
        <PromoComponents>
            <h2>Video Editing</h2>
            <p>Duis mattis porttitor tincidunt malesuada etiam aliquet mauris sit turpis neque sollicitudin</p>
        </PromoComponents>
        <PromoComponents>
        <h2>Video Shot</h2>
            <p>Duis mattis porttitor tincidunt malesuada etiam aliquet mauris sit turpis neque sollicitudin</p>
        </PromoComponents>
        <PromoComponents>
        <h2>Video Director</h2>
            <p>Duis mattis porttitor tincidunt malesuada etiam aliquet mauris sit turpis neque sollicitudin</p>
        </PromoComponents>
    </PromoDiv>
    <LandingDiv>
        <LContentDiv1>
            <LContent>

            </LContent>
            <Lmedia>

            </Lmedia>
        </LContentDiv1>
        <LcontentDiv2>

        </LcontentDiv2>
    </LandingDiv>

    </>
  )
}

export default HeroComp