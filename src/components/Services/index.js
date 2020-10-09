import React from 'react';
import Icon1 from '../../images/svg-track.svg';
import Icon2 from '../../images/svg-phone.svg';
import Icon3 from '../../images/svg-world.svg';
import Icon4 from '../../images/svg-rewards.svg';
import {ServicesContainer,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH1,ServicesH2,ServicesP} from './ServicesElements';


const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Track Expenses</ServicesH2>
                    <ServicesP>We help track and reduce your fees and increase your overall revenue</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Freedom On Go</ServicesH2>
                    <ServicesP>Access your account anywhere on the go via the Netvink App. Download today.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Unlimited Abilites</ServicesH2>
                    <ServicesP>Directly send and accept funds from foreign countries instantly.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Exclusive Rewards</ServicesH2>
                    <ServicesP>Sign up for our Ultra Card today to receive up to %5 cash-back bonus.</ServicesP>
                </ServicesCard>

                

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
