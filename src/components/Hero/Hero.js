
import Image from 'next/image';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {Button} from '../../styles/GlobalComponents';
import { LeftSection, ProfilePic ,SectionTP} from './HeroStyles';

const Hero = (props) => {
  function buttonClick(link){
    window.open(link,"_blank")
  }
  return(
  <>
    <Section row hero padding={"0"} margin={"0 0 0 10%"} width_={"90%"} >
    
      <LeftSection>
        <SectionTP>
          <ProfilePic>
          <Image src={props.data.image} width={"100"} height={"100"} style={{width:"100%",height:"100%",objectFit:"cover"}} alt="My photo"/>
          </ProfilePic>
          
          <SectionTitle heroT main center>
            {props.data.title.split("|")[0]}
            <br/>
            {props.data.title.split("|")[1]}
          </SectionTitle>
        </SectionTP>

        <SectionText heroP>
        {props.data.desc}

        </SectionText>
        <Button onClick={()=>buttonClick(props.data.buttLink)} target='_blank'>{props.data.buttTitle}</Button>


      </LeftSection>
    </Section>
  </>
)};

export default Hero;