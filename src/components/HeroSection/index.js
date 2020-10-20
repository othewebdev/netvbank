import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements'
import { HeroContainer,
     HeroBg, 
     VideoBg, 
     HeroContent, 
     HeroH1, 
     HeroP, 
     HeroBtnWrapper, 
     ArrowForward, 
     ArrowRight 
    } from './HeroElements'


const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Financial Security Assured.</HeroH1>
                <HeroP>Sign Up for Netvink Ultra Today and Receive Up To $500 in Credit Towards Future Payments. </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup"
                     onMouseEnter={onHover}
                      onMouseLeave={onHover}
                      primary='true'
                      dark='true'
                            smooth={true}
                            duration={675}
                            spy={true}
                            exact='true'
                            offset={-80}>
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
