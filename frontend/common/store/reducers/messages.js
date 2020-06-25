import { ADD_MESSAGE, ADD_MESSAGES, SELECT_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE, DELETE_ALL_MESSAGES } from '../actions/messages.js';

const initialState = {
    list: [{}, {}],
    editMessage: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
      case ADD_MESSAGES: {
          if (!action.payload) return { ...state, list: []};

          return {
              ...state,
              list: action.payload.map(item => {
                  if (state.editMessage) {
                    item.edit = state.editMessage.id === item.id;
                  }
                  return item;
              })
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
      case DELETE_MESSAGE: {
          return {
              ...state,
              list: state.list.filter(item => {
                if (item.id !== action.payload) {
                    return item;
                }
              }),
          };
      }
      case DELETE_ALL_MESSAGES: {
        return {
          ...state,
          list: []
        }
      }
      default: {
          return state;
      }
  }
};

export default reducer;
