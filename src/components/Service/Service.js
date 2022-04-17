import React from "react";
import './Service.css';
import { Card } from "react-bootstrap";

const Service = (props) => {
    const { name, review, rating, img } = props.service;
    return (
        <div>
            <Card className="component-shadow">
                <div className="cards-container">
                    <img src={img} alt={name} />
                    <h1>{name}</h1>
                </div>
                <p className="review-text">{review}</p>
                <Card.Footer>
                    <small>Rating: {rating}</small>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default Service;