import React from 'react';
import './NoMatch.css';

const NoMatch = () => {
    return (
        <div className="text-center noMatch">
            <h1 className="font-weight-bold">404: Page Not Found</h1>
            <p>Sorry, but the page you were trying to <br/>view does not exist.</p>
        </div>
    );
};

export default NoMatch;