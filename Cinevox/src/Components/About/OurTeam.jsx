import React,{useState} from 'react';
import { PpicBro, PpicMark, PpicNyein, Profile, ProfileContent, ProfileDiv, Teamdiv, THeader } from './OurTeamelements';

const OurTeam = () => {
   const [ProfileState, setProfileState] = useState({
    Mark:false,
    Nyein: 'false',
    Bro: 'false'

});

   const toggleMarkstate= ()=>{
    setProfileState({...ProfileState,Mark:true})
   }

  return (
    <>
        <Teamdiv>
            <THeader>
                <h3>MEET OUR TEAM</h3>
                <h1>Teamwork makes the dream work.</h1>
            </THeader>
            <Profile>
                <PpicMark>
                    
                    <ProfileDiv>
                    <ProfileContent>
                    <h2>Mark</h2>
                    <h3>Co-founder</h3>
                    </ProfileContent>
                    </ProfileDiv>
                  
                </PpicMark>
                <PpicBro></PpicBro>
                <PpicNyein></PpicNyein>
            </Profile>
        </Teamdiv>
    </>
  )
}

export default OurTeam