const DELETE_ALL_MESSAGES = 'DELETE_ALL_MESSAGES';

export const deleteAllMessages = () => {
    console.log('action deleteAllMessages');
    return {
        type: DELETE_ALL_MESSAGES,
    };
};