import React from 'react';

import './index.scss';

export default ({isReciver}) => {
    return (
        <div className={`typing-indicator-wrap ${isReciver === 'receiver' ? 'left' : ''}`}>
            <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}