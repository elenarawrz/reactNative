import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, authenticate } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.authenticate({ email, password });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            labelText='Email'
            placeholder='email@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            labelText='Password'
            placeholder='password'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        { this.props.isLoading && <Spinner size='large' /> }

        { !!this.props.error &&
          <Text style={styles.error}>{this.props.error}</Text>
        }

        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
            disabled={this.props.isLoading}
          >Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  error: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    padding: 10
  }
};

const mapStateToProps = ({ auth: { email, password, error, isLoading } }) => ({
  email,
  password,
  error,
  isLoading
});

export default connect(mapStateToProps, { emailChanged, passwordChanged, authenticate })(LoginForm);
