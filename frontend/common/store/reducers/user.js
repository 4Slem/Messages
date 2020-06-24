import { EDIT_USER_NAME, EDIT_USER_IMAGE } from '../actions/user.js';

const initialState = {
  userName: '',
  userImage: '',
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case EDIT_USER_NAME: {
        return {
            ...state,
            userName: action.payload
        }
    }
    case EDIT_USER_IMAGE: {
        return {
        ...state,
        userImage: action.payload
        }
    }
    default: {
        return state;
    }
  }
};

export default reducer;
