export const DELETE_ALL_MESSAGES = 'DELETE_ALL_MESSAGES';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_MESSAGES = 'ADD_MESSAGES';
export const SELECT_MESSAGE = 'SELECT_MESSAGE';
export const EDIT_MESSAGE = 'EDIT_MESSAGE';

export const deleteAllMessages = () => {
    return {
        type: DELETE_ALL_MESSAGES,
    };
};

export const addMessage = (payload) => {
    return {
        type: ADD_MESSAGE,
        payload
    };
};

export const addMessages = (payload) => {
    return {
        type: ADD_MESSAGES,
        payload
    };
};

export const selectMessage = (payload) => {
    return {
        type: SELECT_MESSAGE,
        payload
    };
};

export const editMessage = (payload) => {
    return {
        type: EDIT_MESSAGE,
        payload
    };
};