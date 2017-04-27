import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hola!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
