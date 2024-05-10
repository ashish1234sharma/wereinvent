import { combineReducers } from 'redux';
import { SIGN_TOKEN} from './action';

// Initial state for todos
const initialTodoState = {
  token: localStorage.getItem('token') || null
};

// Reducer for todos
const tokenReducer = (state = initialTodoState, action:any) => {
  switch (action.type) {
    case SIGN_TOKEN:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token:action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tokenReducer,
  });
  
  export default rootReducer;