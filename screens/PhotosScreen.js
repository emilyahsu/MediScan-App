// import { useState } from "react";
import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import Button from '../components/Button';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const PhotosScreen = ({navigation}) => {
  const [photo, setPhoto] = React.useState(null);

  const handleChoosePhoto = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      console.log(response);
      if (response) {
        setPhoto(response);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Prescriptions</Text>
      <ScrollView horizontal={true} style={styles.carousel}>
        {photo && (
          <Image source={{uri: photo.assets[0].uri}} style={styles.graphic} />
        )}
        <TouchableOpacity
          style={styles.plus}
          onPress={() => handleChoosePhoto()}>
          <Image
            source={require('../assets/images/plus.png')}
            style={styles.plusSign}
          />
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#F3F6FD',
    alignItems: 'center',
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
  },
  graphic: {
    width: 300,
    height: 300,
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
  },
  plusSign: {
    height: 140,
    width: 140,
  },
  carousel: {
    flexDirection: 'row',
  },
});

export default PhotosScreen;
