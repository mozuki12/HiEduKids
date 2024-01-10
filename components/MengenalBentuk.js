import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ImageBackground, Dimensions } from 'react-native';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const { width, height } = Dimensions.get('screen');

const shapes = [
  { name: 'Lingkaran', image: require('../assets/Lingkaran.png') },
  { name: 'Segitiga', image: require('../assets/Segitiga.png') },
  { name: 'Persegi', image: require('../assets/Persegi.png') },
];

export default function MengenalBentuk({ navigation }) {
  const [currentShape, setCurrentShape] = useState(null);

  const shuffleShapes = () => {
    const shuffledShapes = [...shapes];
    for (let i = shuffledShapes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledShapes[i], shuffledShapes[j]] = [shuffledShapes[j], shuffledShapes[i]];
    }
    setCurrentShape(shuffledShapes[0]);
  };

  const handleAnswer = (selectedShape) => {
    if (currentShape && selectedShape === currentShape.name) {
      Alert.alert('Horeee', 'Jawaban kamu benar!');
    } else {
      Alert.alert('Deng Dong', 'Jawaban kamu salah. Coba lagi!');
    }

    shuffleShapes();
  };

  if (!currentShape) {
    shuffleShapes();
  }

  return (
    <ImageBackground source={require('../assets/BGbentuk.png')} style={styles.bgImage}>
      <View style={styles.container}>
        <Text style={styles.text2}>Mengenal Bentuk</Text>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.back}>
              <FontAwesomeIcon icon={faArrowCircleLeft} size={35} color='#D1A27C'/>
          </TouchableOpacity>
        <Text style={styles.questionText}>Bentuk apa ini?</Text>
        {currentShape && <Image source={currentShape.image} style={styles.image} />}
        <View style={styles.optionsContainer}>
          {shapes.map((shape) => (
            <TouchableOpacity
              key={shape.name}
              style={styles.optionButton}
              onPress={() => handleAnswer(shape.name)}
            >
              <Text style={styles.optionText}>{shape.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
  questionText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: height * -0.06,
  },
  image: {
    width: width * 0.5,
    height: height * 0.3,
    resizeMode: 'contain',
    marginTop: height * 0.04,
  },
  optionsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    padding: width * 0.05,
    marginTop: height * 0.1,
  },
  optionButton: {
    backgroundColor: 'skyblue',
    padding: width * 0.03,
    borderRadius: width * 0.02,
    borderWidth: 0.5,
    margin: width * 0.05,
  },
  optionText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  back: {
    position: 'absolute',
    width: width * 0.11,
    height: height * 0.05,
    backgroundColor: 'yellow',
    borderRadius: width * 0.1,
    right: width * 0.05, 
    top: height * 0.05, 
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    position: 'absolute',
    fontSize: width * 0.06,
    top: height * 0.13,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
});
