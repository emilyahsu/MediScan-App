// import { useState } from "react";
import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
// import Button from '../components/Button';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const SERVER_URL = 'http://localhost:3000';

const createFormData = (photo, body = {}) => {
  const data = new FormData();

  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri: photo.uri,
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};

const OnboardingScreen = ({navigation}) => {
  const [photo, setPhoto] = React.useState(null);

  const handleChoosePhoto = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      console.log(response);
      if (response) {
        setPhoto(response);
        // handleUploadPhoto();
        navigation.navigate('Photos');
      }
    });
  };

  const handleUploadPhoto = () => {
    fetch(`${SERVER_URL}/api/upload`, {
      method: 'POST',
      body: createFormData(photo, {userId: '123'}),
    })
      .then(response => response.json())
      .then(response => {
        console.log('response', response);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/gradient.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <Image
          source={require('../assets/images/graphic.png')}
          style={styles.graphic}
        />
        <View style={styles.modal}>
          <Text style={styles.title}>Let's get started!</Text>
          <Text style={styles.subtitle}>
            Upload photos of {'\n'} your prescriptions
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Photos')}>
            <Text style={styles.buttonText}>Upload photos</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  modal: {
    marginTop: 50,
    backgroundColor: '#FCFDFF',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 270,
    borderRadius: 25,
    padding: 30,
    shadowColor: '#191C31',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
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
  subtitle: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 24,
    color: '#9196AA',
  },
  graphic: {
    width: 333,
    height: 298,
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
});

export default OnboardingScreen;
