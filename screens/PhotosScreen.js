import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import TesseractOcr, {LANG_ENGLISH} from 'react-native-tesseract-ocr';

const PhotosScreen = ({navigation}) => {
  const [photo, setPhoto] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  // const [text, setText] = React.useState('');

  // const recognizeTextFromImage = async path => {
  //   try {
  //     console.log('path', path);
  //     const tesseractOptions = {};
  //     const recognizedText = await TesseractOcr.recognize(
  //       path,
  //       LANG_ENGLISH,
  //       tesseractOptions,
  //     );
  //     setText(recognizedText);
  //   } catch (err) {
  //     console.error(err);
  //     setText('');
  //   }
  // };

  const handleChoosePhoto = async () => {
    launchImageLibrary({mediaType: 'photo'}, async response => {
      // console.log(response);
      if (response) {
        setPhoto(response);
      }
      // await recognizeTextFromImage(photo.assets[0].uri);

      // try {
      //   console.log(photo.assets[0].uri);
      //   recognizeTextFromImage(photo.assets[0].uri);
      //   console.log('text', text);
      // } catch (err) {
      //   if (err.message !== 'User cancelled image selection') {
      //     console.error(err);
      //   }
      // }
      // const tessOptions = {};
      // const OCRtext = await TesseractOcr.recognize(
      //   photo.assets[0].uri,
      //   LANG_ENGLISH,
      //   tessOptions,
      // );
      // setText(OCRtext);
      // console.log(text);
    });
  };

  const startLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate('Calendar');
    }, 8000);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <>
          <Image
            source={require('../assets/images/loader1.gif')}
            style={styles.loader}
          />
          <Text style={styles.subtitle}>
            Hold tight as we get your schedule ready!
          </Text>
        </>
      ) : (
        <>
          <Text style={styles.title}>Your Prescriptions</Text>
          <View style={styles.scrollContainer}>
            <ScrollView
              horizontal={true}
              style={styles.scrollView}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.carousel}>
                <Image
                  source={require('../assets/images/med1.jpeg')}
                  style={styles.image}
                />
                <Image
                  source={require('../assets/images/med2.jpeg')}
                  style={styles.image}
                />
                <Image
                  source={require('../assets/images/med3.jpeg')}
                  style={styles.image}
                />
                <Image
                  source={require('../assets/images/med4.jpeg')}
                  style={styles.image}
                />
                {photo && (
                  <Image
                    source={{uri: photo.assets[0].uri}}
                    style={styles.image}
                  />
                )}
                <TouchableOpacity
                  style={styles.plus}
                  onPress={() => handleChoosePhoto()}>
                  <Image
                    source={require('../assets/images/plus.png')}
                    style={styles.plusSign}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => startLoading()}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F3F6FD',
    alignItems: 'center',
  },
  image: {
    borderRadius: 20,
    width: 315,
    height: 335,
    marginHorizontal: 10,
  },
  title: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 26,
    color: '#202538',
    marginVertical: 50,
  },
  subtitle: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 20,
    color: '#202538',
    marginHorizontal: 70,
    lineHeight: 26,
    textAlign: 'center',
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
  loader: {
    width: 200,
    height: 200,
  },
});

export default PhotosScreen;
