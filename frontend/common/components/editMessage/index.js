import React from 'react';
import './index.scss';
import picureIco from '../../assets/icons/picture.svg'
import trashIco from '../../assets/icons/trash-black.svg'
import sentIco from '../../assets/icons/sent.svg'

const EditMessage = ({ data, click }) => {
    return (
        <div className={`edit-message ${data.direction === 'receiver' ? 'receiver' : ''}`} onClick={click}>
            { data.message }
            <div className="edit-message__content">
            </div>
            <div className="edit-message__footer">
                <div className="edit-message__footer-item">
                    <img src={picureIco} />
                </div>
                <div className="edit-message__footer-item">
                    <img src={trashIco} />
                </div>
                <div className="edit-message__footer-item">
                    <img src={sentIco} />
                </div>
            </div>
        </div>
    );
};

export default EditMessage;