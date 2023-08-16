import React from 'react'
import Mountain1 from "../../assets/1.jpg"
import Mountain2 from "../../assets/2.jpg"
import "./Destination.css"

export const Destination = () => {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tours give you opportunity to see a lot within a time frame.</p>
            <div className='first-des'>
                <div className='des-text'>
                    <h2>Taal Volcano, Batangas</h2>
                    <p>Taal Volcano is the second most active volcano found in the province of Batangas.  A complex volcano in the middle of Taal Lake and is often called an island within a lake, that is an island within a lake that is on an island as well as one of the lowest volcano in the world having 311 meters elevation.  It offers a very a spectacular view seen from Tagaytay Ridge.  Taal volcano is located around 50 kilometers away from Manila, capital of the Philippines.

                        The main Vulcan point situated in the main crater lake, which is on the volcano island that is in Taal lake, which is in the main island of the Philippines (Luzon).

                        Shown in the above image, almost everyone thought that it is the volcano itself.  Looking at the aerial view below, what is being seen by the Tagaytay Ridge is actually the “Binintiang Malaki (Big Leg)” located at the upper part of the image, that was the center of 1707 and 1715 eruption.</p>
                </div>
                <div className='image'>
                    <img src={Mountain1} alt="noimg"></img>
                    <img src={Mountain2} alt="noimg"></img>
                </div>
            </div>
        </div>
    )
}
