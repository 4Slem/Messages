const EDIT_USER_NAME = 'EDIT_USER_NAME';
const EDIT_USER_IMAGE = 'EDIT_USER_IMAGE';

export const editUserName = (payload) => {
    return {
        type: EDIT_USER_NAME,
        payload,
    };
};

export const editUserImage = (payload) => {
    return {
        type: EDIT_USER_IMAGE,
        payload,
    };
};