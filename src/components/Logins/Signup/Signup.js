import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    };

    return (
        <div>
            <h2 className="text-center mt-5">Please Signup</h2>
            <Form className="w-25 m-auto">
                <Form.Group className="mb-3" controlId="inlineFormInput">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control required type="text" placeholder="enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="give your password" />
                </Form.Group>
                <div class="text-center">
                    <Button variant="primary" type="submit" className="w-100 mb-2">Submit</Button>
                </div>
                <p className="mb-5">Already have an account? <Link to="/login" className="text-danger text-decoration-none" onClick={navigateToLogin}>Login</Link></p>
            </Form>
        </div>
    );
};

export default Signup;