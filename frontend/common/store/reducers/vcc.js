import { InstantRemixing } from '@withkoji/vcc';
import { ON_SET_REMIXING } from '../actions/vcc.js';

const initialState = {
  instantRemixing: new InstantRemixing(),
  isRemixing: true
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ON_SET_REMIXING: {
      return {
        ...state,
        isRemixing: action.payload
      }
    }
    default: {
        return state;
    }
  }
};

export default reducer;
