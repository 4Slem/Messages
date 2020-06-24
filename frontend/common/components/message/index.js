import React from 'react';
import './index.scss';

const Message = ({ data, click }) => {
    return (
        <div class={`message ${data.direction === 'receiver' ? 'receiver' : ''}`} onClick={click}>
            { data.message }
        </div>
    );
};

export default Message;