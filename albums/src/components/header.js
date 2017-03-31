import React from 'react';
import { Text, View } from 'react-native';

const Header = props => {
  const { text, view } = styles;
  return (
    <View style={view}>
      <Text style={text}>{props.text}</Text>
    </View>
  );
};

const styles = {
  text: {
    fontSize: 25,
    color: '#FFF'
  },
  view: {
    backgroundColor: '#BBB',
    padding: 10,
    height: 70,
    justifyContent: 'flex-end',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.7,
    elevation: 10,
    position: 'relative'
  }
};

export default Header;
