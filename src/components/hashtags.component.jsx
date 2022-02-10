import React from 'react';

const Hashtags = ({ name }) => {
    return (
        <div>
            <div className={`hastag ${name}`}>#{name}</div>
        </div>
    );
};

export default Hashtags;