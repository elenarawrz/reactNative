import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDfgtnlo3FHtgnDJgl2y73aatCFsS9JroE',
      authDomain: 'auth-72ef6.firebaseapp.com',
      databaseURL: 'https://auth-72ef6.firebaseio.com',
      projectId: 'auth-72ef6',
      storageBucket: 'auth-72ef6.appspot.com',
      messagingSenderId: '1046126670418'
    });

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: !!user });
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true: return (
        <CardSection>
          <Button
            onPress={() => { firebase.auth().signOut(); }}
          >Log out</Button>
        </CardSection>
      );
      case false: return <LoginForm />;
      default: return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header text='Authenticator' />
        { this.renderContent() }
      </View>
    );
  }
}

export default App;
