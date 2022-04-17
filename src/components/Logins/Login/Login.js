import React, { useRef } from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };

    const navigateToSignup = () => {
        navigate("/signup");
    };

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <h1 className="text-center mt-5">Please Login</h1>
            <Form className="w-25 m-auto" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required ref={emailRef} type="email" placeholder="enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required ref={passwordRef} type="password" placeholder="give your password" />
                </Form.Group>
                <div className="text-center">
                    <Button variant="primary" type="submit" className="w-100 mb-2">Submit</Button>
                </div>
                <p className="mb-5">New to Online-Tutor? <Link to="/signup" className="text-danger text-decoration-none" onClick={navigateToSignup}>Signup</Link></p>
            </Form>
        </div>
    );
};

export default Login;