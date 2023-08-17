import React from 'react'
import Mountain1 from "../../assets/1.jpg"
import Mountain2 from "../../assets/2.jpg"
import Mountain3 from "../../assets/3.jpg"
import Mountain4 from "../../assets/4.jpg"
import "./Destination.css"
import { DestinationData } from './DestinationData'

export const Destination = () => {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tours give you opportunity to see a lot within a time frame.</p>


            <DestinationData title="Taal Volcano, Batangas"
                paragraph="Taal Volcano is the second most active volcano found in the province of Batangas.  A complex volcano in the middle of Taal Lake and is often called an island within a lake, that is an island within a lake that is on an island as well as one of the lowest volcano in the world having 311 meters elevation.  It offers a very a spectacular view seen from Tagaytay Ridge.  Taal volcano is located around 50 kilometers away from Manila, capital of the Philippines.
The main Vulcan point situated in the main crater lake, which is on the volcano island that is in Taal lake, which is in the main island of the Philippines (Luzon).
Shown in the above image, almost everyone thought that it is the volcano itself.  Looking at the aerial view below, what is being seen by the Tagaytay Ridge is actually the “Binintiang Malaki (Big Leg)” located at the upper part of the image, that was the center of 1707 and 1715 eruption."

                img1={Mountain1}
                img2={Mountain2}

                className="first-des"></DestinationData>

            <DestinationData title="Mt.Daguldul,Batangas" paragraph="Mt. Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches. Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan and Lobo. The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain.
The Tagalog word “Daguldol” means a feeling of apprehension and grandiosity. According to locals, the mountain was named as such because it describes the magnificence of the mountain range and the blunt rolling of its slopes. Mt. Daguldol has a total trail length of nine kilometers. "

                img1={Mountain3}
                img2={Mountain4}
                className="first-des-reverse"></DestinationData>


        </div>
    )
}
