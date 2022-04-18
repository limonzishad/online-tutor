import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Enroll = () => {

    return (
        <div className="w-50 mx-auto mt-5">
            <Card className="component-shadow">
                <div className="cards-container">
                    <img src="" alt="" />
                    <h5 className="mt-4"></h5>
                </div>
                <p className="service-text"></p>
                <p className="service-text">Price: </p>
                <div className="w-100 mx-auto mb-3">
                    <Link to="/enroll">
                        <Button variant="primary" className="w-100 mx-auto">ADD TO CART</Button>
                    </Link>
                </div>
                <div className="w-100 mx-auto">
                    <Link to="/enroll">
                        <Button variant="primary" className="w-100 mx-auto">CHECKOUT</Button>
                    </Link>
                </div>
            </Card >
        </div>
    );
};

export default Enroll;