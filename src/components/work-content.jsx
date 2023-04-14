import React from "react";
import sgw from '../assets/sagawa.png';
import project from '../assets/code2.png';

class Works extends React.Component {
    render(){
        return (
            <div>
                <div className="title-div">
                    <h1>My Projects <i>!</i></h1>
                </div>                
                <div className="work-container">
                    <div className="work-card-container">
                        <div className="cover-image">
                            <img src={sgw} alt="sgh" />
                        </div>
                        <div className="work-detail-container">
                            <h2 className="project-title">SG Sagawa | Home Page<i>!</i></h2>
                            <span className="project-description">
                                - Modern transportation websites with Track and Trace Bill Online, Booking Online...<br/>
                                - Cost Calculator Plugin Included for Free.
                            </span>
                            <div className="code-languages">
                                <span className="lang"><b>C#</b></span>
                                <span className="lang"><b>SCSS</b></span>
                                <span className="lang"><b>HTML</b></span>
                                <span className="lang"><b>JavaScript</b></span>
                                <span className="lang"><b>Other</b></span>
                            </div>
                        </div>
                    </div>
                    <div className="work-card-container">
                        <div className="cover-image">
                            <img src={sgw} alt="sgh" />
                        </div>
                        <div className="work-detail-container">
                            <h2 className="project-title">Warehouse Management System <i>!</i></h2>
                            <span className="project-description">
                                - Modern online warehouse management system.<br/>
                                - Track every stock move with unique double-entry inventory system.
                            </span>
                            <div className="code-languages">
                                <span className="lang"><b>C#</b></span>
                                <span className="lang"><b>SCSS</b></span>
                                <span className="lang"><b>HTML</b></span>
                                <span className="lang"><b>JavaScript</b></span>
                                <span className="lang"><b>Other</b></span>
                            </div>
                        </div>
                    </div>
                    <div className="work-card-container">
                        <div className="cover-image">
                            <img src={project} alt="sgh" />
                        </div>
                        <div className="work-detail-container">
                            <h2 className="project-title">Doggo Bot Discord <i>!</i></h2>
                            <span className="project-description">
                                - The perfect music bot for your server! High-quality music, 24/7, permission system and more!<br/>
                                - Supports Spotify, Soundcloud, Youtube...
                            </span>
                            <div className="code-languages">
                                <span className="lang"><b>JavaScript</b></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Works