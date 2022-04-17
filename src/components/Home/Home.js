import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useReview from "../../hooks/useReview";
import useService from "../../hooks/useService";
import Review from "../Review/Review";
import Service from "../Service/Service";
import './Home.css';
import banner1 from '../../images/banner1.png';
import banner2 from '../../images/banner2.png';
import banner3 from '../../images/banner3.png';

const Home = () => {
    let navigate = useNavigate();
    const changeRouteToReviews = () => {
        navigate('/reviews');
    }

    const [reviews] = useReview();
    const [services] = useService();

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className="w-100 h-25" src={banner1} alt="banner 1"
                    />
                    <Carousel.Caption className="text-dark fw-bold">
                        <h3>ASSIGNMENTS</h3>
                        <p>More Than 10 Assignments in Each Course.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="w-100 h-25" src={banner2} alt="banner 2"
                    />
                    <Carousel.Caption className="text-dark fw-bold">
                        <h3>EXAMINATION & QUIZ</h3>
                        <p>250+ Quiz with 4 Examinations.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="w-100 h-25" src={banner3} alt="banner 3"
                    />
                    <Carousel.Caption className="text-dark fw-bold">
                        <h3>CERTIFICATE</h3>
                        <p>Will Get Certificate After Finishing the Course.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>
                <h2 className="text-center">STUDENTS REVIEWS</h2>
                <div className="reviews-container">
                    {
                        services.slice(0, 3).map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
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