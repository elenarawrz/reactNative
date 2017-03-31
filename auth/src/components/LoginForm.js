import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Card, CardSection, Button } from './common';

class LoginForm extends Component {
  state = { text: '' };
  onChangeText = text => {
    this.setState({ text });
    console.log(this.state);
  };

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={this.onChangeText}
            style={styles.text}
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

const styles = {
  text: {
    height: 50,
    width: 100
  }
};

export default LoginForm;
