import React from 'react';
import './index.scss';

const Message = ({ data, click }) => {
    console.log(data);
    if (data.imgSrc) {
        return (
            <div className={`message-img ${data.direction === 'receiver' ? 'receiver' : ''}`} onClick={click}>
                <img src={data.imgSrc} />
            </div>
        );
    }
    return (
        <div className={`message ${data.direction === 'receiver' ? 'receiver' : ''}`} onClick={click}>
            {data.message}
        </div>
    );
};

export default Message;