// eslint-disable-next-line no-unused-vars
import React from "react";
import profileImg from "../../assets/profile_img.jpg"
import "./Hero.css"
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link.js";
function Hero() {
    return <div id={"home"} className='hero'>
        <img src={profileImg} alt={"profileImg"}/>
        <h1><span> I&#39;m Khushwant Kumawat,</span> frontend Developer based in Rajasthan</h1>
        <p>I am Frontend Devloper from Jodhpur, Rajasthan with 6 month of Experience in Frontend Development.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className={"anchor-link"} offset={50}>Connect</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>;
}
export default Hero;