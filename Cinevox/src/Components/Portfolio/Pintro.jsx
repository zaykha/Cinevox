import React from 'react'
import { AHero, AHerodiv, Value, Vcard1, Vcard2, Vcard3, Vcarddiv, VHeader } from '../About/introelement'
import { LContent, LContentDiv1, Lh3, Lmedia } from '../HomePage/HeroCompelement'
import Portfoliovid from '../../../src/Portfolio.mp4'
import { Pcard1, Pcard2, Pcard3, PlayCircle, TCarouselcontainer, Tcontent, Testimonialdiv } from './Pintroelement'
import { THeader } from '../About/OurTeamelements'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

const Pintro = () => {
  return (
    <>
        <AHero>
    <AHerodiv>
        <h1>Gallery</h1>
        <h3>The best way to communicate is through video.</h3>
    </AHerodiv>
</AHero>
<LContentDiv1>
            <LContent>
                <Lh3>OUR PROJECT</Lh3>
                <h2>If a picture is worth 1,000 words, imagine what a video is worth!</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </LContent>
            <Lmedia muted>
                <source src={Portfoliovid} type="video/mp4"/>
                 Your browser does not support HTML5 video.
            </Lmedia>
        </LContentDiv1>
    <Value>
        <VHeader>
            <Lh3>OUR LATEST PROJECT</Lh3>
            <h1>We make your ideas come to life.</h1>
        </VHeader>
        <Vcarddiv>
            <Pcard1>
                <PlayCircle/>
                <h2>PHILLIPS</h2>
                <p>"Inceptos sed cubilia in nibh vel id potenti odio consectetur eros vehicula"
                </p>
            </Pcard1>
            <Pcard2>
            <PlayCircle/>
                <h2>EDITIONS</h2>
                <p>"Inceptos sed cubilia in nibh vel id potenti odio consectetur eros vehicula"
                </p>
            </Pcard2>
            <Pcard3>
            <PlayCircle/>
                <h2>WEDDINGS</h2>
                <p>"Inceptos sed cubilia in nibh vel id potenti odio consectetur eros vehicula"
                </p>

            </Pcard3>
        </Vcarddiv>

    </Value>
    <Testimonialdiv>
        <THeader>
            <Lh3></Lh3>
            <h1></h1>
        </THeader>
        <TCarouselcontainer>
            <Carousel showThumbs={false} axis={'horizontal'}>
                
                <Tcontent>
                    <h3>"Inceptos sed cubilia in nibh vel id potenti odio consectetur eros vehicula"</h3>
                    <p>Melina</p>
                    <p>Phillips CEO</p>
                </Tcontent>
                <Tcontent>
                <p>YO</p>
                </Tcontent>
                <Tcontent>
                <p>YO</p>
                </Tcontent>
                <Tcontent>
                <p>YO</p>
                </Tcontent>
                <Tcontent>
                <p>YO</p>
                </Tcontent>

            </Carousel>
        </TCarouselcontainer>
    </Testimonialdiv>
</>
  )
}

export default Pintro;