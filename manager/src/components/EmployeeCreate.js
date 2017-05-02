import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';
import { CardSection, Card, Input, Button } from './common';
import { employeeUpdate } from '../actions';


class EmployeeCreate extends Component {
  onUpdateProp(prop, value) {
    this.props.employeeUpdate({ prop, value });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            labelText='Name'
            placeholder='Jane Doe'
            value={this.props.name}
            onChangeText={text => this.onUpdateProp('name', text)}
          />
        </CardSection>

        <CardSection>
          <Input
            labelText='Phone'
            placeholder='123-456-7890'
            value={this.props.phone}
            onChangeText={text => this.onUpdateProp('phone', text)}
          />
        </CardSection>

        <CardSection>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={day => this.onUpdateProp('shift', day)}
          >
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                .map(day => <Picker.Item key={day} label={day} value={day} />)}
          </Picker>
        </CardSection>

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ employee: { name, phone, shift } }) => ({
  name,
  phone,
  shift
});

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
