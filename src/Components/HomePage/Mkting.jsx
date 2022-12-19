import React from 'react'
import { Affordable, Certified, Desktop, Flexible, MH2, Mktcard, MktCardholder, Mktcontent, MktDiv, MktHeader, MktInner } from './Mktingelement'


const Mkting = () => {
  return (
    <>
        <MktDiv>
            <MktInner>
                <MktHeader>
                    <MH2>WHY CHOOSE US</MH2>
                    <h2>We make your business look good.</h2>
                </MktHeader>
                <MktCardholder>
                    <Mktcard>
                        <Certified/>
                        <Mktcontent>
                            <MH2>Certified Professionals</MH2>
                            <p>Letius bibendum posuere enim facilisi magnis massa integer mi inceptos sollicitudin viverra nunc gravida interdum</p>
                        </Mktcontent>
                    </Mktcard>
                    <Mktcard>
                        <Desktop/>
                        <Mktcontent>
                            <MH2>Clean Editing</MH2>
                            <p>Letius bibendum posuere enim facilisi magnis massa integer mi inceptos sollicitudin viverra nunc gravida interdum</p>
                        </Mktcontent>
                    </Mktcard>
                    <Mktcard>
                        <Affordable/>
                        <Mktcontent>
                            <MH2>Affordable Price</MH2>
                            <p>Letius bibendum posuere enim facilisi magnis massa integer mi inceptos sollicitudin viverra nunc gravida interdum</p>
                        </Mktcontent>
                    </Mktcard>
                    <Mktcard>
                        <Flexible/>
                        <Mktcontent>
                            <MH2>Flexible support</MH2>
                            <p>Letius bibendum posuere enim facilisi magnis massa integer mi inceptos sollicitudin viverra nunc gravida interdum</p>
                        </Mktcontent>
                    </Mktcard>
                    
                </MktCardholder>

            </MktInner>
        </MktDiv>
    </>
  )
}

export default Mkting