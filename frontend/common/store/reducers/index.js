import { combineReducers } from 'redux';

import userReducer from './user';
import messagesReducer from './messages';
import vccReducer from './vcc';
import controlsReducer from './controls';

const rootReducer = combineReducers({
  userReducer,
  messagesReducer,
  vccReducer,
  controlsReducer
});

export default rootReducer;
