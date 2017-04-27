import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  AUTHENTICATE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '' };

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case AUTHENTICATE_SUCCESS:
      console.log('success!');
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
