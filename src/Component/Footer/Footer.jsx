// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Footer.css"
import user_icon from "../../assets/user_icon.svg"
import footer_logo from "../../assets/footer_logo.svg"

export default function Footer() {
    return <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt={"footer logo"}/>
                <p>I am a frontend developerI am a frontend developer I am a frontend developer I am a frontend
                    developer </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt={"user icon"}/>
                    <input type="email" placeholder="Enter Your Email"/>
                </div>
                <div className={"footer-subscribe"}>
                    Subscribe
                </div>
            </div>

        </div>
        <hr/>
        <div className={"footer-bottom"}>
            <p className={"footer-bottom-left"}>
                $ 2025 Khushwant Kumawat
            </p>
            <div className={"footer-bottom-right"}>
                <p>Terms of Service</p>
                <p>Privacy Policy </p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
}