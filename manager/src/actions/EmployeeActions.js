import firebase from 'firebase';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CLEAN
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

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database()
            .ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => employeeClean(dispatch));
  };
};
