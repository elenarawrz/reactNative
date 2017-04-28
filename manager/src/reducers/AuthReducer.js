import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAIL,
  AUTHENTICATE
} from '../actions/types';

const INITIAL_STATE = {
  email: 'test@test.com',
  password: 'password',
  user: null,
  error: '',
  isLoading: false
};

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case AUTHENTICATE:
      return { ...state, error: '', isLoading: true };

    case AUTHENTICATE_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };

    case AUTHENTICATE_FAIL:
      return { ...state, error: 'Authentication failed :(', password: '', isLoading: false };

    default:
      return state;
  }
};
