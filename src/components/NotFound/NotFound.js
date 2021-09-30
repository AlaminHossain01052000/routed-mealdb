import React from 'react';
import { useHistory } from 'react-router';
import "./NotFound.css";

const NotFound = () => {
    const history = useHistory();
    const goToHome = () => {
        history.push("/home")
    }
    return (
        <div className="error-dom">
            <h1>OopS!</h1>
            <h2>404-Page Not Found</h2>
            <h3>The page you are looking for might have been removed had it names changed or its temporalily unavailable</h3>
            <button onClick={goToHome} className="error-button">Go To Homepage</button>
        </div>
    );
};

export default NotFound;