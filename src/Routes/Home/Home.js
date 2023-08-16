import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Hero } from "../../components/Hero/Hero"
import HomePic from "../../assets/Home.jpg"
import { Destination } from '../../components/Destination/Destination'


export const Home = () => {
    return (
        <>
            <Hero
                cName="hero"
                heroImg={HomePic}
                title="Your Journey Your Story"
                text="Choose your Favourite Destination"
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            ></Hero>
            <Navbar></Navbar>
            <Destination></Destination>
        </>

    )
}
