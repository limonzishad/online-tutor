import React from "react";
import './Reviews.css';
import useReview from "../../hooks/useReview";
import Review from "../Review/Review";

const Reviews = () => {
    const [reviews] = useReview();
    return (
        <div className="reviews-container">
            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
        </div>
    );
}

export default Reviews;