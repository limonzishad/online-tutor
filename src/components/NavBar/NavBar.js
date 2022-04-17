import React from "react";
import { Link } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const NavBar = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth);
    };

    return (
        <div>
            <Navbar className="justify-content-end" bg="light" expand="lg">
                <Nav className="me-5">
                    <Nav.Link as={Link} to="/">HOME</Nav.Link>
                    <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
                    <Nav.Link as={Link} to="/reviews">REVIEWS</Nav.Link>
                    <Nav.Link as={Link} to="/blogs">BLOGS</Nav.Link>
                    <Nav.Link as={Link} to="/about">ABOUT ME</Nav.Link>
                    {
                        user ?
                            <Nav.Link onClick={handleSignout}>SIGNOUT</Nav.Link>
                            :
                            <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>}
                </Nav>
            </Navbar>
        </div>
    );
};

export default NavBar;