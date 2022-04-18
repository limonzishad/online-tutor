import React from "react";
import './About.css';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <Card body className="about">
            <h1>TUTOR'S INFORMATION</h1>
            <hr></hr>
            <div className="w-25 mx-auto">
                <img src="https://www.vhv.rs/dpng/d/526-5267211_gentleman-png-download-formal-profile-picture-png-transparent.png" alt="" />
            </div>
            <p>Deiago Andres Rodrigo Roderick Gonzalez</p>
            <p>MSc. in Computer Science</p>
            <p>BSc. in Computer Science and Engineering</p>
            <p>Web Development Instructor at online-tutor.com</p>
        </Card>
    );
}

export default About;