import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import './Home.css';

const Home = () => {
    let navigate = useNavigate();
    const changeRouteToReviews = () => {
        let path = `/reviews`;
        navigate(path);
    }

    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="" alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="" alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="" alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>
                <h2 className="text-center">STUDENTS REVIEWS</h2>
                <div className="reviews-container">
                    {
                        reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
                <button onClick={changeRouteToReviews} className="home-btn">SEE ALL REVIEWS</button>
            </div>
        </div>
    );
}

export default Home;