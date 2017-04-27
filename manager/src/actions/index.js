import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  AUTHENTICATE_SUCCESS
} from './types';

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text
});

export const authenticate = ({ email, password }) =>
  dispatch => {
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: AUTHENTICATE_SUCCESS, payload: user });
      });
  };
