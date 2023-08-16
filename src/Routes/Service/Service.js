import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Hero } from "../../components/Hero/Hero"
import ServicePic from "../../assets/3.jpg"


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
        </>

    )
}