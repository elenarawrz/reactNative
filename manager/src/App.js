import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDRwMxAR0TF0yJEtgW1iBqk6Jskkn6eZtk',
      authDomain: 'manager-rnc.firebaseapp.com',
      databaseURL: 'https://manager-rnc.firebaseio.com',
      projectId: 'manager-rnc',
      storageBucket: 'manager-rnc.appspot.com',
      messagingSenderId: '162432140596'
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
