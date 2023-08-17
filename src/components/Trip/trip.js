import React from 'react'
import "./trip.css"
import { TripData } from './tripData'
import TripImage1 from "../../assets/5.jpg"
import TripImage2 from "../../assets/6.jpg"
import TripImage3 from "../../assets/8.jpg"


export const Trip = () => {
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can Discover unique destinations using Google Maps </p>
            <div className='tripcard'>
                <TripData image={TripImage1} heading="Trip in Indoneshia" text="Indonesia markets itself as Wonderful Indonesia as their Indonesia Tourism project slogan, and the slogan is quite true, although not necessarily always in good ways. Indonesia's tropical forests are the second-largest in the world after Brazil, and are being logged and cut down at the same alarming speed. While the rich shop and party in Jakarta and Bali, decades of economic mismanagement have left much of the population living on less than USD2/day. However, the country is developing rapidly and the World Bank poverty figures have decreased fourfold in the past decade. Infrastructure in much of the country remains rudimentary, and travelers off the beaten track will need some patience and flexibility."></TripData>
                <TripData image={TripImage2} heading="Trip in Malayshia" text="Malayshia markets itself as Wonderful Malayshia as their Tourism project slogan, and the slogan is quite true, although not necessarily always in good ways. Malashiya's tropical forests are the second-largest in the world after Brazil, and are being logged and cut down at the same alarming speed. While the rich shop and party in Jakarta and Bali, decades of economic mismanagement have left much of the population living on less than USD2/day. However, the country is developing rapidly and the World Bank poverty figures have decreased fourfold in the past decade . Infrastructure in much of the country remains rudimentary, and travelers off the beaten track will need some patience and flexibility."></TripData>
                <TripData image={TripImage3} heading="Trip in France" text="France markets itself as Wonderful France as their Indonesia Tourism project slogan, and the slogan is quite true, although not necessarily always in good ways. It's tropical forests are the second-largest in the world after Brazil, and are being logged and cut down at the same alarming speed. While the rich shop and party in Jakarta and Bali, decades of economic mismanagement have left much of the population living on less than USD2/day. However, the country is developing rapidly and the World Bank poverty figures have decreased fourfold in the past decade . Infrastructure in much of the country remains rudimentary, and travelers off the beaten track will need some patience and flexibility."></TripData>
           
            </div>
        </div>
    )
}
