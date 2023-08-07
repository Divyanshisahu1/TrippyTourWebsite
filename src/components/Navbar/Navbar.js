import React, { useState } from 'react'
import "../Navbar/Navbar.css"
import { Link } from "react-router-dom"
import { Menuitems } from "./Menuitems"

export const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <nav className='Navitems'>
            <h1 className='navbar-logo'>Trippy</h1>
            <div className='menu-icons' onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : 'nav-menu'}>
                {
                    Menuitems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i class={item.icon}></i>
                                    {item.title}</Link></li>
                        )
                    })
                }

                <button className='signup_btn'>Sign Up</button>
            </ul>

        </nav>
    )
}

