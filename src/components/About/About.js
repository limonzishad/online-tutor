import React from "react";
import './About.css';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <Card body className="about">
            <h1>TUTOR'S INFORMATION</h1>
            <hr></hr>
            <p>This assignment is assigned by programing hero.</p>
            <Button><Link as={Link} to="/login">LOGIN</Link></Button>
        </Card>
    );
}

export default About;