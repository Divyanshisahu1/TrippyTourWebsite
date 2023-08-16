import "./Hero.css"
import React from 'react'
import Home from "../../assets/Home.jpg"

export const Hero = (props) => {
  return (
    <div className={props.cName}>
        <img alt="" src={props.heroImg}></img>
        <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
        </div>
      
    </div>
  )
}
