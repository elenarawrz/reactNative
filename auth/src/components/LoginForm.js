import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = { email: '' };
  onChangeEmail = email => {
    this.setState({ email });
    console.log(this.state);
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@domain.com"
            value={this.state.email}
            onChangeText={this.onChangeEmail}
          />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button onPress={() => console.log('lalala')}>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
