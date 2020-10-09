import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjFour } from '../components/InfoSection/Data';
import Footer from '../components/Footer';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }



    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services/>
            <InfoSection {...homeObjFour} />
            <Footer/>
        </>
    )
}

export default Home
