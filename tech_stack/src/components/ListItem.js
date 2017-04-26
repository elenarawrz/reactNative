import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  renderDescription() {
    const { expanded, item } = this.props;
    if (expanded) {
      return <Text>{item.description}</Text>;
    }
  }

  render() {
    const { id, title } = this.props.item;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.title}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = ({ selectedLibraryId }, ownProps) =>
  ({ expanded: selectedLibraryId === ownProps.item.id });

export default connect(mapStateToProps, actions)(ListItem);
