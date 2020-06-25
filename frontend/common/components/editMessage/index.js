import React from 'react';
import './index.scss';
import picureIco from '../../assets/icons/picture.svg'
import trashIco from '../../assets/icons/trash-black.svg'
import sentIco from '../../assets/icons/sent.svg'
import sentlIco from '../../assets/icons/sent-l.svg'

const EditMessage = ({ data, editMessage, deleteMessage, editImage, sentMessage, imageCancel }) => {
    return (
        <div className={`edit-message ${data.direction === 'receiver' ? 'receiver' : ''}`}>
            <div className="edit-message__content" onClick={editMessage}>
                { data.imgSrc ? <><img src={data.imgSrc} /><span onClick={imageCancel}>Delete image</span></> : data.message }
                
            </div>
            <div className="edit-message__footer">
                <div className="edit-message__footer-item" onClick={editImage}>
                    <img src={picureIco} />
                </div>
                { deleteMessage &&
                <div className="edit-message__footer-item" onClick={deleteMessage}>
                    <img src={trashIco} />
                </div>
                }
                <div className="edit-message__footer-item" onClick={sentMessage}>
                     {data.direction === 'receiver' ? <img src={sentIco} /> : <img src={sentlIco} />}
                </div>
            </div>
        </div>
    );
};

export default EditMessage;