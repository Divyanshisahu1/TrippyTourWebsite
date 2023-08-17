    import React from 'react'
    import "./trip.css"
    
    export const TripData = (props) => {
      return (
        <div className='t-card'>
            <div className='t-image'>
                <img alt="noimg" src={props.image}></img>
                
            </div>
           <h4>{props.heading}</h4> 
           <p>{props.text}</p>
        </div>
      )
    }
    