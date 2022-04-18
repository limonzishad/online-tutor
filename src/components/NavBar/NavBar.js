import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const NavBar = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth);
    };

    return (

        <Navbar bg="light" expand="lg" className="w-100">
            <Container className="w-100">
                <Navbar.Brand><Nav.Link as={Link} to="/">ONLINE-TUTOR</Nav.Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;