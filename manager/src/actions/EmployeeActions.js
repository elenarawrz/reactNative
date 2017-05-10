import firebase from 'firebase';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CLEAN,
  EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
});

export const employeeClean = (dispatch) => {
  const action = { type: EMPLOYEE_CLEAN };
  if (typeof dispatch === 'function') dispatch(action);
  else return action;
};

export const employeeCreate = ({ name, phone, shift }) => (dispatch) => {
  firebase.database()
          .ref(`/users/${currentUid()}/employees`)
          .push({ name, phone, shift })
          .then(() => employeeClean(dispatch));
};

export const employeesFetch = () => (dispatch) => {
  firebase.database()
          .ref(`/users/${currentUid()}/employees`)
          .on('value', snapshot => {
            dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
          });
};

const currentUid = () => firebase.auth().currentUser.uid;
