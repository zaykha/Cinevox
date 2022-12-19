import React from 'react'
import { GlossCard, GlossImg, Herodiv, HeroP, HeroPhrase, LandingDiv, LContent, LContentDiv1, LcontentDiv2, Lgrid, Lh3, Lheader, Lmedia, Overlay, PromoComponents, PromoDiv, VidDiv } from './HeroCompelement';
import video from '../../../src/H123.mp4';
import video1 from '../../../src/Hero-video.mp4';
import videoads from '../../../src/pics/landing/vid-ads.png';
import MV from '../../../src/pics/landing/music-video.png';
import videoVlog from '../../../src/pics/landing/video-blog.png';
import Gaming from '../../../src/pics/landing/gaming.png';
import Movie from '../../../src/pics/landing/movie.png';
import videoDocumenter from '../../../src/pics/landing/video-documentor.png';

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
                <Lh3>WHO WE ARE</Lh3>
                <h2>Video Production that's creative and affordable</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </LContent>
            <Lmedia muted>
                <source src={video1} type="video/mp4"/>
                 Your browser does not support HTML5 video.
            </Lmedia>
        </LContentDiv1>
        <LcontentDiv2>
                <Lheader>
                    <Lh3>WHAT WE OFFER</Lh3>
                    <h2>Video is the future of communication</h2>
                </Lheader>
                <Lgrid>
                    <GlossCard>
                        <GlossImg src={videoads}></GlossImg>
                        <h2>Video Ads</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </GlossCard>
                    <GlossCard>
                        <GlossImg src={MV}></GlossImg>
                        <h2>Music Video</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </GlossCard>
                    <GlossCard>
                        <GlossImg src={videoVlog}></GlossImg>
                        <h2>Video Vlog</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </GlossCard>
                    <GlossCard>
                        <GlossImg src={Gaming}></GlossImg>
                        <h2>Gamings</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </GlossCard>
                    <GlossCard>
                        <GlossImg src={Movie}></GlossImg>
                        <h2>Movie</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </GlossCard>
                    <GlossCard>
                        <GlossImg src={videoDocumenter}></GlossImg>
                        <h2>Video Documenter</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </GlossCard>
                </Lgrid>
        </LcontentDiv2>
    </LandingDiv>

    </>
  )
}

export default HeroComp