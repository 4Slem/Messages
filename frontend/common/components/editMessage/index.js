import React from 'react';
import './index.scss';
import picureIco from '../../assets/icons/picture.svg'
import trashIco from '../../assets/icons/trash-black.svg'
import sentIco from '../../assets/icons/sent.svg'

const EditMessage = ({ data, click }) => {
    return (
        <div class={`edit-message ${data.direction === 'receiver' ? 'receiver' : ''}`} onClick={click}>
            { data.message }
            <div class="edit-message__content">
            </div>
            <div class="edit-message__footer">
                <div class="edit-message__footer-item">
                    <img src={picureIco} />
                </div>
                <div class="edit-message__footer-item">
                    <img src={trashIco} />
                </div>
                <div class="edit-message__footer-item">
                    <img src={sentIco} />
                </div>
            </div>
        </div>
    );
};

export default EditMessage;