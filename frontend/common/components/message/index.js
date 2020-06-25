import React, { useState } from 'react';
import './index.scss';
import arrowIcon from '../../assets/icons/ar.svg';
import arrowIcon2 from '../../assets/icons/ar2.svg';

const Message = ({ data, click }) => {
    const [animation, setAnimation] = useState(false);
    setTimeout(() => {
        setAnimation(true);
    }, 10);

    const isReceiver = data.direction === 'receiver';
  
    if (data.imgSrc) {
        return (
            <div className={`message-img ${isReceiver && 'receiver'} ${animation && 'animation'}`} onClick={click}>
                <img className="message-img__image" src={data.imgSrc} />
            </div>
        );
    }
    return (
        <div className={`message ${isReceiver && 'receiver'} ${animation && 'animation'}`} onClick={click}>
            {data.message}
            <img className="message__arrow" src={isReceiver ? arrowIcon2 : arrowIcon} />
        </div>
    );
};

export default Message;