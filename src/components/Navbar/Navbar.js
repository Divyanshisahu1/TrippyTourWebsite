import React from 'react'
import "../Navbar/Navbar.css"
import { Menuitems } from "./Menuitems"

export const Navbar = () => {
    return (
        <nav className='Navitems'>
            <h1 className='navbar-logo'>Trippy</h1>
            <ul className='nav-menu'>
                {
                    Menuitems.map((item, index) => {
                        return (
                            <li key={index}><a className={item.cName} href={item.url}><i class={item.icon}></i>{item.title}</a></li>
                        )
                    })
                }

                <button className='signup_btn'>Sign Up</button>
            </ul>

        </nav>
    )
}

