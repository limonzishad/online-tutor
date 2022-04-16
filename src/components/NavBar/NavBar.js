import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
            <Navbar className="justify-content-end" bg="light" expand="lg">
                <Nav className="me-5">
                    <Nav.Link as={Link} to="/">HOME</Nav.Link>
                    <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
                    <Nav.Link as={Link} to="/reviews">REVIEWS</Nav.Link>
                    <Nav.Link as={Link} to="/blogs">BLOGS</Nav.Link>
                    <Nav.Link as={Link} to="/about">ABOUT ME</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;