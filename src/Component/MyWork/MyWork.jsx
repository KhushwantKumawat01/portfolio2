// eslint-disable-next-line no-unused-vars
import React from "react";
import "./MyWork.css"
import arrow_icon from "../../assets/arrow_icon.svg"
import mywork_data from "../../assets/mywork_data.js";
import theme_pattern from "../../assets/theme_pattern.svg"
function MyWork() {
    return <div id={"work"} className="mywork">
        <div className="mywork-title">
            <h1>My Work</h1>
            <img src={theme_pattern} alt="theme_pattern" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index) => {
                    return <img key={index} src={work.w_img}/>
                })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="arrow_icon"/>
        </div>
    </div>;
}
export default MyWork;