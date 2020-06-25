import React, { useState } from 'react';

import './index.scss';

export default ({isReciver}) => {
    const [animation, setAnimation] = useState(false);
    setTimeout(() => {
        setAnimation(true);
    }, 100);

    return (
        <div className={`typing-indicator-wrap ${isReciver === 'receiver' ? 'left' : ''}`}>
            <div className={`typing-indicator ${animation && 'animation'}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}