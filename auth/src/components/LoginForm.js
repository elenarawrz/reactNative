import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
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
