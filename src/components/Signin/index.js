import React, { useState } from 'react'
import { 
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    Text,
    TextLink
} from './SigninElements';

import { ArrowForward, 
    ArrowRight  } from '../HeroSection/HeroElements'

const SignIn = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to ="/">netvink</Icon>
                        <FormContent>
                            <Form action="#">
                                 
                                <FormH1>Sign in Netvink</FormH1>
                                <FormLabel htmlFor='for'>Email</FormLabel>
                                <FormInput type='email' required/>
                                <FormLabel htmlFor='for'>Password</FormLabel>
                                <FormInput type='password' required/>
                                <TextLink to="/"
                     onMouseEnter={onHover}
                      onMouseLeave={onHover}
                      primary='true'
    dark='true' >{hover ? <ArrowForward/> : <ArrowRight/>}</TextLink>
                                <Text>Forgot password?</Text>
                                
                            </Form>
                        </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn