import React from "react";
import Service from '../Service/Service';
import './Services.css';
import useService from "../../hooks/useService";

const Services = () => {
    const [services] = useService();
    return (
        <div className="reviews-container mt-5 pb-5">
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
        </div>);
}

export default Services;