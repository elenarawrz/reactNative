import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAIL
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
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => authenticateSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => authenticateSuccess(dispatch, user))
          .catch(() => authenticateFail(dispatch));
      });
  };

const authenticateSuccess = (dispatch, user) => {
  dispatch({
    type: AUTHENTICATE_SUCCESS,
    payload: user
  });
};

const authenticateFail = dispatch => {
  dispatch({ type: AUTHENTICATE_FAIL });
}