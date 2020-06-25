import { UPDATE_RECEIVER, UPDATE_SENDER } from '../actions/controls.js';

const initialState = {
    receiverMessage: {
      message: "",
      imgSrc: null,
      id: 10000
    },
    senderMessage: {
      message: "",
      imgSrc: null,
      id: 10000
    }
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_RECEIVER: {
        return {
            ...state,
            receiverMessage: action.payload
        }
    }
    case UPDATE_SENDER: {
      console.log('sender: ', action.payload)
        return {
            ...state,
            senderMessage: action.payload
        }
    }
    default: {
        return state;
    }
  }
};

export default reducer;
