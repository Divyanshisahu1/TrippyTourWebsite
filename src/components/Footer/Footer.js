import React from 'react'
import "./Footer.css"
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillBehanceCircle } from 'react-icons/ai';

export const Footer = () => {
    return (
        <div className="footer">
            <div className='top'>
                <div>
                    <h1>Trippy</h1>
                    <p>Choose your Favourite Destination</p>
                </div>
                <div>
                    <a href="/"><AiFillFacebook className='i' /></a>
                    <a href="/"><AiFillInstagram className='i' /></a>
                    <a href="/"><AiFillBehanceCircle className='i' /></a>
                    <a href="/"><AiFillTwitterCircle className='i' /></a>
                </div>

            </div>
            <div className='bottom'>
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">Licence</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitters</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">TroubleShooting</a>
                    <a href="/">Contact Us</a>

                </div>
                <div>
                    <h4>Other</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Licence</a>
                </div>

            </div>
        </div>
    )
}
