// eslint-disable-next-line no-unused-vars
import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg"
import "./Services.css"
import arrow_icon from "../../assets/arrow_icon.svg"
import Services_Data from "../../assets/services_data.js"
function Services() {
    return <div id={"services"} className="servics">
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern}/>
        </div>
        <div className="service-container">
            {Services_Data.map((service, index) => {
                return (
                    <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="arrow_icon"/>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>;
}
export default Services;