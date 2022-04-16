import React from "react";
import './NotFound.css';
import { Card } from "react-bootstrap";

const NotFound = () => {
    return (
        <Card body className="message">
            <h1>&#9746; 404 ERROR &#9746;</h1>
            <p>unfortunately, it is a wrong route.</p>
        </Card>
    );
}

export default NotFound;