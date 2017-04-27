import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, disabled, children }) => (
  <TouchableOpacity onPress={onPress} disabled={disabled} style={styles.button}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

const styles = {
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    padding: 10
  }
};

export { Button };
