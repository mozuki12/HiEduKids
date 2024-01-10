import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

const { width, height } = Dimensions.get('screen');

export default function HomeScreen({ navigation }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedColorName, setSelectedColorName] = useState(null);

  const colors1 = ['yellow', 'blue', 'red', 'green'];
  const colors2 = ['brown', 'pink', 'orange', 'purple'];

  const colorNames = {
    yellow: 'Kuning',
    blue: 'Biru',
    red: 'Merah',
    green: 'Hijau',
    brown: 'Coklat',
    pink: 'Merah Muda',
    orange: 'Jingga',
    purple: 'Ungu',
  };

  const handleColorSelect = (color, colorName) => {
    setSelectedColor(color);
    setSelectedColorName(colorNames[colorName]);
  };

  return (
    <ImageBackground
      source={require('../assets/BGpuzzle.png')}
      style={styles.bgImage}
    >
      <View style={styles.container}>
      <Text style={styles.text1}>Mengenal Warna</Text>
      {selectedColor && (
          <View
            style={[styles.selectedColorView, { backgroundColor: selectedColor }]}
          >
          </View>
        )}
        <Text style={styles.selectedColorText}>{selectedColorName}</Text>
        <View style={styles.colorRow}>
          {colors1.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorButton, { backgroundColor: color }]}
              onPress={() => handleColorSelect(color, colors1[index])}
            />
          ))}
        </View>
        <View style={styles.colorRow}>
          {colors2.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorButton, { backgroundColor: color }]}
              onPress={() => handleColorSelect(color, colors2[index])}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={styles.backButton}
        >
          <FontAwesomeIcon icon={faArrowCircleLeft} size={35} color="#D1A27C" />
        </TouchableOpacity>
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
  colorRow: {
    flexDirection: 'row',
    marginTop: height * 0.01,
  },
  colorButton: {
    margin: 10,
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: width * 0.075,
    top: width * 0.1,
  },
  selectedColorView: {
    alignItems: 'center',
    alignSelf: 'center',
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.2,
    justifyContent: 'center',
    marginBottom: height * 0.05,
  },
  selectedColorText: {
    color: 'black',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: width * 0.04,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text1: {
    top: height * -0.05,
    fontWeight: 'bold',
    fontSize: width * 0.07,
    alignSelf: 'center',
    color: 'black',
    marginBottom: height * 0.05,
  },
  backButton: {
    position: 'absolute',
    width: width * 0.12,
    height: width * 0.12,
    backgroundColor: 'yellow',
    borderRadius: width * 0.075,
    right: width * 0.05,
    top: height * 0.07,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
