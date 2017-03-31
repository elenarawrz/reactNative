import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  onChangeEmail = email => {
    this.setState({ email });
    console.log(this.state);
  };

  onChangePassword = password => {
    this.setState({ password });
    console.log(this.state);
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

        <CardSection>
          <Button onPress={() => console.log('lalala')}>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
