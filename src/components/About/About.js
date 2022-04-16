import React from "react";
import './About.css';
import { Card } from "react-bootstrap";

const About = () => {
    return (
        <Card body className="about">
            <h1>ABOUT THE ASSIGNMENT</h1>
            <hr></hr>
            <p>This assignment is assigned by programing hero.</p>
        </Card>
    );
}

export default About;