import React from 'react';
import './index.scss';

const EditMessage = ({ data, click }) => {
    return (
        <div class={`edit-message ${data.direction === 'receiver' ? 'receiver' : ''}`} onClick={click}>
            { data.message }
            <div class="edit-message__content">
            </div>
            <div class="edit-message__footer">
                <div class="edit-message__footer-item">
                
                </div>
                <div class="edit-message__footer-item">
                
                </div>
                <div class="edit-message__footer-item">
                
                </div>
            </div>
        </div>
    );
};

export default EditMessage;