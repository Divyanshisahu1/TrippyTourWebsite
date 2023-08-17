import React from 'react'
import "./Destination.css"
export const DestinationData = (props) => {
    return (

        <div className={props.className}>
            <div className='des-text'>
                <h2>{props.title}</h2>
                <p>{props.paragraph}</p>
            </div>
            <div className='image'>
                <img src={props.img1} alt="noimg"></img>
                <img src={props.img2} alt="noimg"></img>
            </div>
        </div>

    )
}
