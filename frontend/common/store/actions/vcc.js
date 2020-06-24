export const ON_SET_REMIXING = 'ON_SET_REMIXING';
export const EDIT_VCC = 'EDIT_VCC';

export const editVcc = (payload) => {
    return {
        type: EDIT_VCC,
        payload,
    };
};

export const onSetRemixing = (payload) => {
    return {
        type: ON_SET_REMIXING,
        payload,
    };
};