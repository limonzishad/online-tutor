import React from "react";
import './Blogs.css';
import { Accordion } from "react-bootstrap";

const Blogs = () => {

    return (
        <div className="blog-container">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What are the differences between Authorization and Authentication?
                    </Accordion.Header>
                    <Accordion.Body>In authentication, the system identifies the user by checking user's resources (email, password, unique id) and gives the access to the system. User is verified in authentication. Also, authentication determines whether the person is user or not.In authorization, user's authorities are checked by the system for accessing the resources. User is validated in authorization. Besides, authorization determines What permissions the user has.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using Firebase? What other options do you have to implement Authentication?</Accordion.Header>
                    <Accordion.Body>I use firebase for authentication in my projects. I also host my project in firebase hosting. Now a days, firebase is vastly use for authentication. There are other options or alternatives for authentication. Those are, Auth0, Okta, JSON Web Token, Amazon Cognito etc.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What other services does Firebase provide other than Authentication?</Accordion.Header>
                    <Accordion.Body>Other than authentication, firebase gives web developers a lot of services. Firebase has a huge collection of top notch services. Such as, realtime database, cloud fire store, remote config, hosting, cloud function etc.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div >
    );
}

export default Blogs;