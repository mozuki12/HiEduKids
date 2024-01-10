import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { Dimensions } from 'react-native';

//library.add();

const { width, height } = Dimensions.get('screen');

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/BGhome.png')}
      style={styles.bgImage}
    >
      <View style={styles.container}>
        <Image
        source={require('../assets/Logo.png')}
        style={styles.logo}
        />
        <View style={styles.location}>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Puzzle')}
              style={styles.card}
            >
              <Image
                source={require('../assets/Iconwarna.png')}
                style={styles.icon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('HurufdanAngka')}
              style={styles.card}
            >
              <Image
                source={require('../assets/iconHA.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MengenalBentuk')}
              style={styles.card}
            >
              <Image
                source={require('../assets/iconBentuk.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  card: {
    height: height * 0.15,
    width: width * 0.3,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: '2%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 15,
  },
  icon: {
    resizeMode: 'contain',
    width: '60%',
  },
  logo: {
    position: 'absolute',
    resizeMode: 'contain',
    width: width * 0.4,
    top: height * -0.35,
    left: width * 0.3, 
    marginHorizontal: 'auto',
  },
  location: {
    marginTop: height * 0.5,
  },
});
