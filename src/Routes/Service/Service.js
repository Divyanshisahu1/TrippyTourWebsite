import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Hero } from "../../components/Hero/Hero"
import ServicePic from "../../assets/3.jpg"
import { Footer } from '../../components/Footer/Footer'
import { Trip } from '../../components/Trip/trip'


export const Service = () => {
    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg={ServicePic}
                title="Service"
                btnClass="hide"
            ></Hero>
            <Navbar></Navbar>
            <Trip></Trip>
            <Footer></Footer>
        </>

    )
}