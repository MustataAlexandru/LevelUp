import React, { useState, useEffect } from 'react';
import './FirstPage.css'

const FirstPage = (props) => {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setStartAnimation(true);
        }, 500);
    }, []);

    const moveOn = () => {
        window.location.reload();
        window.location.href = "/";
    }

    return (
        <div style={{textAlign: 'center' , marginBottom: '2rem'}}>
            <div className={`animation-text ${startAnimation ? 'animate' : ''}`}>
                <span>{props.children}</span>
                <span className="underscore">_</span>
            </div>
            {/*<button className='button' onClick={moveOn}>Let's begin -------->>>>>>>></button>*/}
        </div>
    );
};

export default FirstPage;