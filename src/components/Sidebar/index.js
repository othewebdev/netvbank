import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <SidebarLink  to="home"
                            smooth={true}
                            duration={675}
                            spy={true}
                            exact='true'
                            offset={-80}
                             onClick={toggle}>Home</SidebarLink>
                    <SidebarLink  to="about"
                            smooth={true}
                            duration={675}
                            spy={true}
                            exact='true'
                            offset={-80}
                             onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}
                    smooth={true}
                    duration={675}
                    spy={true}
                    exact='true'
                    offset={-80}
                     onClick={toggle}
                    >Discover</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}
                    smooth={true}
                    duration={675}
                    spy={true}
                    exact='true'
                    offset={0}
                     onClick={toggle}
                    >Services</SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}
                    smooth={true}
                    duration={675}
                    spy={true}
                    exact='true'
                    offset={-80}
                     onClick={toggle}
                    >Sign-Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap to='/signin'>
                      <SidebarRoute to='/signin'>Sign-In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
