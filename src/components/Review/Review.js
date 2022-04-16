import React from "react";
import './Review.css';
import { Card } from "react-bootstrap";

const Review = (props) => {
    const { name, review, rating, img } = props.review;
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

export default Review;