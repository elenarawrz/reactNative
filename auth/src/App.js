import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDfgtnlo3FHtgnDJgl2y73aatCFsS9JroE',
      authDomain: 'auth-72ef6.firebaseapp.com',
      databaseURL: 'https://auth-72ef6.firebaseio.com',
      projectId: 'auth-72ef6',
      storageBucket: 'auth-72ef6.appspot.com',
      messagingSenderId: '1046126670418'
    });
  }

  render() {
    return (
      <View>
        <Header text='Authenticator' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
