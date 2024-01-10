import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const { width, height } = Dimensions.get('window');

export default function HurufdanAngka({ navigation }) {
  const [touches, setTouches] = useState([]);
  const [isFirstTouch, setIsFirstTouch] = useState(true);

  const handleTouch = (event) => {
    const { locationX, locationY } = event.nativeEvent;

    const isNumber = Math.random() < 0.5;
    const content = isNumber
      ? Math.floor(Math.random() * 10).toString()
      : String.fromCharCode(65 + Math.floor(Math.random() * 26));

    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;

    const newTouch = {
      id: Date.now(),
      x: locationX,
      y: locationY,
      opacity: new Animated.Value(1),
      content,
      randomColor,
    };
    setTouches((prevTouches) => [...prevTouches, newTouch]);

    Animated.timing(newTouch.opacity, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      setTouches((prevTouches) =>
        prevTouches.filter((touch) => touch.id !== newTouch.id)
      );
    });

    if (isFirstTouch) {
      setIsFirstTouch(false);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/BGangka.png')}
      style={styles.bgImage}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={handleTouch}>
          <View style={styles.touchArea} />
        </TouchableWithoutFeedback>

        {isFirstTouch && <Text style={styles.text1}>Ketuk Layar...</Text>}

        {touches.map((touch) => {
          randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
          )}, ${Math.floor(Math.random() * 256)})`;
          return (
            <Animated.Text
              key={touch.id}
              style={[
                styles.floatingText,
                { left: touch.x, top: touch.y, opacity: touch.opacity, color: randomColor },
              ]}
            >
              {touch.content}
            </Animated.Text>
          );
        })}

        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.back}>
          <FontAwesomeIcon icon={faArrowCircleLeft} size={35} color='#D1A27C' />
        </TouchableOpacity>

        <Text style={styles.text2}>Mengenal Huruf dan Angka</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  touchArea: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  floatingText: {
    position: 'absolute',
    fontSize: 0.3 * Math.min(Dimensions.get('window').width, Dimensions.get('window').height), 
    fontWeight: 'bold',
  },
  text1: {
    position: 'absolute',
    fontSize: 0.05 * Math.min(Dimensions.get('window').width, Dimensions.get('window').height), 
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text2: {
    position: 'absolute',
    fontSize: 0.05 * Math.min(Dimensions.get('window').width, Dimensions.get('window').height), 
    top: 0.3 * Math.min(Dimensions.get('window').width, Dimensions.get('window').height), 
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  back: {
    position: 'absolute',
    width: width * 0.12,
    height: height * 0.06,
    backgroundColor: 'yellow',
    borderRadius: width * 0.1, 
    right: width * 0.05, 
    top: height * 0.07, 
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
})