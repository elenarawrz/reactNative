import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onChangeEmail = email => {
    this.setState({ email });
    console.log(this.state);
  };

  onChangePassword = password => {
    this.setState({ password });
    console.log(this.state);
  };

  onPress = () => {
    const { email, password } = this.state;

    this.setState({ error: '' });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication failed :(' });
          });
      });
    console.log('click!');
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            labelText="Email"
            placeholder="email@domain.com"
            value={this.state.email}
            onChangeText={this.onChangeEmail}
          />
        </CardSection>

        <CardSection>
          <Input
            labelText="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={this.onChangePassword}
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.error}>{this.state.error}</Text>

        <CardSection>
          <Button onPress={this.onPress.bind(this)}>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  error: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center',
    padding: 5
  }
};

export default LoginForm;
