import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAIL,
  AUTHENTICATE
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
    dispatch({ type: AUTHENTICATE });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => authenticateSuccess(dispatch, user))
      .catch((e) => {
        console.log('auth error', e);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => authenticateSuccess(dispatch, user))
          .catch((err) => authenticateFail(dispatch, err));
      });
  };

const authenticateSuccess = (dispatch, user) => {
  dispatch({
    type: AUTHENTICATE_SUCCESS,
    payload: user
  });
  Actions.main();
};

const authenticateFail = (dispatch, err) => {
  console.log('create error', err);
  dispatch({ type: AUTHENTICATE_FAIL });
};
