import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Hero } from "../../components/Hero/Hero"
import AboutPic from "../../assets/night.jpg"
import { Footer } from '../../components/Footer/Footer'
import { AboutUs } from '../../components/AboutUs/AboutUs'


export const About = () => {
    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg={AboutPic}
                title="About"
                btnClass="hide"
            ></Hero>
            <Navbar></Navbar>
            <AboutUs></AboutUs>
            <Footer></Footer>

        </>

    )
}