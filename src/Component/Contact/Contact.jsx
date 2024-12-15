// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Contact.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import mail_icon from "../../assets/mail_icon.svg"
import call_icon from "../../assets/call_icon.svg"
import location_icon from "../../assets/location_icon.svg"

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "a39b8ef6-9f96-4cec-ad6f-0cd2ab4bc86a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return <div id={"contact"} className="contact">
        <div className="contact-title">
            <h1>Get In Touch</h1>

            <img src={theme_pattern} alt="theme_pattern" />
        </div>
        <div className="contact-section" >
            <div className="contact-left">
                <h1>Let&#39;s Talk</h1>
                <p>hii</p>
                 <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon}/> <p>khushwant01kumawat@gmail.com</p>
                    </div>
                    <div className="contact-detail">

                        <img src={call_icon}/> <p>+91 7568599845</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon}/> <p>Jodhpur, Rajasthan</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label>Your Name</label>
                <input type={"text"} placeholder="Enter Your Name" name={"name"}/>
                <label>Your Email</label>
                <input type={"email"} placeholder="Enter Your Email" name={"email"}/>
                <label>Your Mobile Number</label>
                <input type={"text"} placeholder="Enter Your Mobile Number" name={"mobile_number"}/>
                <label>Write Your Message Here : </label>
                <textarea name="message" rows="8" placeholder={"Enter Your Text Here"}></textarea>
                <button type="submit" className="contact-Submit">Submit</button>
            </form>
        </div>
    </div>
}

export default Contact;