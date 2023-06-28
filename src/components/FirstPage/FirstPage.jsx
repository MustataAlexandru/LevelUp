import React, { useState, useEffect } from 'react';
import './FirstPage.css';

const FirstPage = ({ text }) => {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setStartAnimation(true);
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div style={{ textAlign: 'center', paddingBottom: '50px' }}>
            <div className={`animation-text ${startAnimation ? 'animate' : ''}`}>
                <span>{text}</span>
                <span className="underscore">_</span>
            </div>
        </div>
    );
};

export default FirstPage;
