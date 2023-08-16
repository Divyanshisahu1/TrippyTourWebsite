import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Hero } from "../../components/Hero/Hero"
import AboutPic from "../../assets/night.jpg"


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
        </>

    )
}