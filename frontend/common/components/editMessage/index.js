import React from 'react';
import './index.scss';
import picureIco from '../../assets/icons/picture.svg'
import trashIco from '../../assets/icons/trash-black.svg'
import sentIco from '../../assets/icons/sent.svg'

const EditMessage = ({ data, editMessage, deleteMessage, editImage, sentMessage }) => {
    return (
        <div className={`edit-message ${data.direction === 'receiver' ? 'receiver' : ''}`}>
            <div className="edit-message__content" onClick={editMessage}>
                { data.message }
            </div>
            <div className="edit-message__footer">
                <div className="edit-message__footer-item" onClick={editImage}>
                    <img src={picureIco} />
                </div>
                <div className="edit-message__footer-item" onClick={deleteMessage}>
                    <img src={trashIco} />
                </div>
                <div className="edit-message__footer-item" onClick={sentMessage}>
                    <img src={sentIco} />
                </div>
            </div>
        </div>
    );
};

export default EditMessage;