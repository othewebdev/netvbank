import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'rgba(0,0,0, 0.4)' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display:flex;
    justify-content: center;
    align-items:center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    display:flex;
    justify-self: flex-start;
    cursor:pointer;
    font-size: 1.5rem;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px){
       
        display:block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 65%);
        font-size: 1.8rem;
        cursor:pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display:flex;
    align-items: center; 
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display:none;
    }
`

export const NavItem = styled.li`
    height: 60px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        transition: 0.3s ease-in;
        height: 108%;
        border-bottom: 5px solid #00A6ED;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items:center;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 6px;
    background: #00A6ED;
    white-space: nowrap;
    padding: 10px 22px;
    color: #0D2C54;
    border: none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`
