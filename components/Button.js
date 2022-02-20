import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Title from './StyledText';

const Button = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => props.onPress()}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E2B35A',
    borderRadius: 25,
    width: 260,
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
    shadowColor: '#FFE2AA',
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 10,
  },
  buttonText: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 20,
    color: '#FFFFFF',
  },
});

export default Button;
