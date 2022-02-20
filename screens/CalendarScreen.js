import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

const CalendarScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/main.jpg')}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 70,
  },
  title: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 26,
    color: '#202538',
    marginVertical: 50,
  },
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
    marginTop: 100,
  },
  buttonText: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 20,
    color: '#FFFFFF',
  },
  plus: {
    height: 140,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
    marginLeft: 30,
    marginRight: 30,
  },
  plusSign: {
    height: 140,
    width: 140,
  },
  carousel: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  scrollContainer: {
    maxHeight: 335,
  },
});

export default CalendarScreen;
