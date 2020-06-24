import { combineReducers } from 'redux';

import userReducer from './user';
import messagesReducer from './messages';
import vccReducer from './vcc';

const rootReducer = combineReducers({
  userReducer,
  messagesReducer,
  vccReducer,
});

export default rootReducer;
