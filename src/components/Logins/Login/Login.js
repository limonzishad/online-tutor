import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();

    const handelSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    };

    const navigateToSignup = () => {
        navigate('/signup');
    };

    return (
        <div>
            <h1 className="text-center mt-5">Please Login</h1>
            <Form className="w-25 m-auto" onSubmit={handelSubmit}>
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