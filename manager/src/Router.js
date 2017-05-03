import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => (
    <Router sceneStyle={{ paddingTop: 60 }}>
      <Scene key='auth'>
        <Scene key='login' component={LoginForm} title='Log in' />
      </Scene>

      <Scene key='main'>
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle='Add'
          key='employeeList'
          component={EmployeeList}
          title='Employees'
        />
      </Scene>
      <Scene
        key='employeeCreate'
        component={EmployeeCreate}
        title='Create Employee'
      />
    </Router>
);

export default RouterComponent;
