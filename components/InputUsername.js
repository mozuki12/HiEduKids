import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const InputUsername = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  const handlePress = () => {
    if (username.trim() !== '' && onSubmit) {
      onSubmit(username);
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.card}>
        <TextInput
            placeholder="Masukkan Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
            style={styles.input}
        />
        <TouchableOpacity style={styles.submit} onPress={handlePress}>
            <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  card: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    top: 300,
    backgroundColor: 'lightblue',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submit: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  submitText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default InputUsername;