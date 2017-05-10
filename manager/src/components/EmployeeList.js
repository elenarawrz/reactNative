import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView } from 'react-native';
import _ from 'lodash';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>Employee 1</Text>
        <Text>Employee 2</Text>
        <Text>Employee 3</Text>
        <Text>Employee 4</Text>
        <Text>Employee 5</Text>
        <Text>Employee 6</Text>
        <Text>Employee 7</Text>
        <Text>Employee 8</Text>
        <Text>Employee 9</Text>
        <Text>Employee 10</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ employees }) => ({
  employees: _.map(employees, (val, uid) => ({ ...val, id: uid }))
});

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
