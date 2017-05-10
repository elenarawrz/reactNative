import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class EmployeeListItem extends Component {
  render() {
    return (
      <CardSection>
        <Text style={styles.title}>{this.props.employee.name}</Text>
      </CardSection>
    );
  }
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default EmployeeListItem;
