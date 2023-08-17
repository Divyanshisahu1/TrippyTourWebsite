import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Hero } from "../../components/Hero/Hero"
import ContactPic from "../../assets/2.jpg"
import { Footer } from '../../components/Footer/Footer'
import { ContactUs } from '../../components/ContactUs/ContactUs'


export const Contact = () => {
    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg={ContactPic}
                title="Contact"
                btnClass="hide"
            ></Hero>
            <Navbar></Navbar>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </>

    )
}