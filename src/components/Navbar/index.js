import React, { useEffect, useState } from 'react';
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks, MobileIcon, NavBtn, NavBtnLink } from './NavbarElements' 
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeNav);
    }, [])


    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav={scrollNav}>   
                <NavbarContainer>
                    <NavLogo onClick={toggleHome} to="/">netvink</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/> 
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true}
                            duration={675}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover"
                            smooth={true}
                            duration={675}
                            spy={true}
                            exact='true'
                            offset={-80}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                            smooth={true}
                            duration={675}
                            spy={true}
                            exact='true'
                            offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup"
                            smooth={true}
                            duration={675}
                            spy={true}
                            exact='true'
                            offset={-80}>Sign-Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="signin">Sign-in</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
}

export default Navbar;
