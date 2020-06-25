export const UPDATE_RECEIVER = 'UPDATE_RECEIVER';
export const UPDATE_SENDER = 'UPDATE_SENDER';

export const updateReceiver = (payload) => {
    return {
        type: UPDATE_RECEIVER,
        payload
    }
};

export const updateSender = (payload) => {
    return {
        type: UPDATE_SENDER,
        payload
    }
};