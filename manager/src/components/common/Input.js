import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = props => {
  const { labelText, value, onChangeText, placeholder, secureTextEntry } = props;
  const { container, label, input } = styles;
  
  return (
    <View style={container}>
      <Text style={label}>{labelText}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        style={input}
      />
    </View>
  );
};

const styles = {
  input: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
