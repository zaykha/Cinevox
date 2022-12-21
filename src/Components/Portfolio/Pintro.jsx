import React from 'react'
import { AHero, AHerodiv, Value, Vcard1, Vcard2, Vcard3, Vcarddiv, VHeader } from '../About/Introelement'
import { LContent, LContentDiv1, Lh3, Lmedia } from '../HomePage/HeroCompelement'
import Portfoliovid from '../../assets/Portfolio.mp4'
import { Pcard1, Pcard2, Pcard3, PlayCircle, TCarouselcontainer, Tcontent, Testimonialdiv } from './Pintroelement'
import { THeader } from '../About/OurTeamelements';
import ImageSlider from './ImageSlider';




const Pintro = () => {
    const slides =[
        {
            testimonies: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            image:'../../assets/pics/testimonial/1.jpg',
            name:'Oliver Roberts',
            title: 'Businessman'
        },
        {
            testimonies: 'Inceptos sed cubilia in nibh vel id potenti odio consectetur eros vehicul',
            image:'../../assets/pics/testimonial/2.jpg',
            name:'Elizabeth Ross',
            title: 'Vlogger'
        },{
            testimonies: 'If a picture is worth 1,000 words, imagine what a video is worth!',
            image:'../../assets/pics/testimonial/3.jpg',
            name:'Jenis Stewart',
            title: 'Event Organizer'
        },{
            testimonies: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            image:'../../assets/pics/testimonial/4.jpg',
            name:'candis modican',
            title: 'Businessman'
        },{
            testimonies: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            image:'../../assets/pics/testimonial/5.jpg',
            name:'Octavian Cesar',
            title: 'Phillips'
        },{
            testimonies: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            image:'../../assets/pics/testimonial/6.jpg',
            name:'Malina dongol',
            title: 'JP morgan Chase'
        }
    ]

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
            <Lh3>TESTIMONIAL</Lh3>
            <h1> What they say</h1>
        </THeader>
            <ImageSlider slides={slides}/>
       
    </Testimonialdiv>
</>
  )
}

export default Pintro;