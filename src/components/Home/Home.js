import React from 'react';
import "./Home.css";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    const handleSeeMore = () => [
        history.push("/restaurent")
    ]
    return (
        <div>
            <div className="welcome-container">
                <h1>Welcome to Al's Restaurant</h1>
                <h3>We Provide Foods</h3>
                <h3>We Spread Happiness </h3>

                <button onClick={handleSeeMore} className="btn-grad">See More</button>


            </div>
        </div>
    );
};

export default Home;