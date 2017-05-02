import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 60 }}>
      <Scene key='auth'>
        <Scene key='login' component={LoginForm} title='Log in' />
      </Scene>

      <Scene key='main'>
        <Scene
          onRight={(e) => console.log(e)}
          rightTitle='Add'
          key='employeeList'
          component={EmployeeList}
          title='Employees'
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
