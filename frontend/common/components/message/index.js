import React, { useState } from 'react';
import './index.scss';

const Message = ({ data, click }) => {
    const [animation, setAnimation] = useState(false);
    setTimeout(() => {
        setAnimation(true);
    }, 10)
  
    if (data.imgSrc) {
        return (
            <div className={`message-img ${data.direction === 'receiver' ? 'receiver' : ''} ${animation && 'animation'}`} onClick={click}>
                <img src={data.imgSrc} />
            </div>
        );
    }
    return (
        <div className={`message ${data.direction === 'receiver' ? 'receiver' : ''} ${animation && 'animation'}`} onClick={click}>
            {data.message}
        </div>
    );
};

export default Message;