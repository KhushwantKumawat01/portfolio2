// eslint-disable-next-line no-unused-vars
import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg"
import  profile_image from "../../assets/profile_img.jpg"
import "./About.css"
function About() {
    return <div id={"about"} className="about">
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src= {profile_image} alt=""/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a frontend developer with 6 months of experience in creating responsive and dynamic web applications. My technical skills include **HTML5, CSS3, JavaScript, ReactJS**, and a strong understanding of **Data Structures and Algorithms (DSA) in Java**. I also have a basic knowledge of **Android development**, allowing me to explore mobile app solutions. I am passionate about building intuitive user interfaces and continuously enhancing my skills to deliver impactful digital experiences.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>
                            HTML & CSS
                        </p>
                        <hr style={{width: "70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>
                            JAVA
                        </p>
                        <hr style={{width: "85%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>
                            REACTJS
                        </p>
                        <hr style={{width: "80%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>
                            JAVASCRIPT
                        </p>
                        <hr style={{width: "85%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>
                            PYTHON
                        </p>
                        <hr style={{width: "55%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>
                            KOTLIN
                        </p>
                        <hr style={{width: "75%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>6</h1>
                <p>Month of Experience</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projcet Developed</p>
            </div>
        </div>
    </div>;
}

export default About;