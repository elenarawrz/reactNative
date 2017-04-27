import React from 'react';
import { View } from 'react-native';

const Card = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = {
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    margin: 8
  }
};

export { Card };
