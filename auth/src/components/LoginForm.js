import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', isLoading: false };

  onChangeEmail(email) {
    this.setState({ email });
    console.log(this.state);
  }

  onChangePassword(password) {
    this.setState({ password });
    console.log(this.state);
  }

  onSuccess() {
    this.setState({ isLoading: false });
  }

  onFail() {
    this.setState({ error: 'Authentication failed :(', isLoading: false });
  }

  onPress() {
    const { email, password } = this.state;

    this.setState({ error: '', isLoading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onSuccess.bind(this))
      .catch(this.createUser.bind(this));
    console.log('click!');
  }

  createUser() {
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onSuccess.bind(this))
      .catch(this.onFail.bind(this));
  }

  showProgress() {
    if (this.state.isLoading) {
      return <Spinner size='small' />;
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            labelText="Email"
            placeholder="email@domain.com"
            value={this.state.email}
            onChangeText={this.onChangeEmail.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            labelText="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={this.onChangePassword.bind(this)}
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.error}>{this.state.error}</Text>
        {this.showProgress()}
        
        <CardSection>
          <Button onPress={this.onPress.bind(this)} disabled={this.state.isLoading}>Log in</Button>
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
