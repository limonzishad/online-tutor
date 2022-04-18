import React from "react";
import './Service.css';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
    const { name, details, img, price } = props.service;
    return (
        <div>
            <Card className="component-shadow">
                <div className="cards-container">
                    <img src={img} alt={name} />
                    <h5 className="mt-4">{name}</h5>
                </div>
                <p className="service-text">{details}</p>
                <p className="service-text">Price: {price}</p>
                <div><Link to="/enroll"><Button variant="primary" className="w-100 mx-auto">ENROLL</Button></Link></div>
            </Card>
        </div>
    );
}

export default Service;