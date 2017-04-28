import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: 'test@test.com',
  password: 'password',
  user: null,
  error: ''
};

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case AUTHENTICATE_SUCCESS:
      return { ...state, user: action.payload, error: '', isLoading: false };

    case AUTHENTICATE_FAIL:
      return { ...state, error: 'Authentication failed :(', password: '', isLoading: false };

    default:
      return state;
  }
};
