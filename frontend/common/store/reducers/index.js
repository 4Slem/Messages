import { combineReducers } from 'redux';

import userReducer from './user';
import messagesReducer from './messages';
import vcc from './vcc';

const rootReducer = combineReducers({
  userReducer,
  messagesReducer,
  vcc,
});

export default rootReducer;
