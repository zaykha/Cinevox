import React from 'react'
import { Mktcard, MktCardholder, MktDiv, MktHeader, MktInner } from './Mktingelement'

const Mkting = () => {
  return (
    <>
        <MktDiv>
            <MktInner>
                <MktHeader>
                    <h4>WHY CHOOSE US</h4>
                    <h2>We make your business look good.</h2>
                </MktHeader>
                <MktCardholder>
                    <Mktcard></Mktcard>
                    <Mktcard></Mktcard>
                    <Mktcard></Mktcard>
                    <Mktcard></Mktcard>
                </MktCardholder>

            </MktInner>
        </MktDiv>
    </>
  )
}

export default Mkting