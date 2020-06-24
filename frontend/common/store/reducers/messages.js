import { DELETE_ALL_MESSAGES, ADD_MESSAGE, ADD_MESSAGES, SELECT_MESSAGE, EDIT_MESSAGE } from '../actions/messages.js';

const initialState = {
    list: [{}, {}],
    editMessage: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
      case ADD_MESSAGES: {
          if (!action.payload) return state;

          return {
              ...state,
              list: action.payload
          };
      }
      case SELECT_MESSAGE: {
          return {
              ...state,
              editMessage: { ...action.payload },
              list: state.list.map(item => {
                  item.edit = item.id === action.payload.id;
                  return item;
              })
          };
      }
        case EDIT_MESSAGE: {
          return {
              ...state,
              editMessage: { ...action.payload },
          };
      }
      default: {
          return state;
      }
  }
};

export default reducer;
