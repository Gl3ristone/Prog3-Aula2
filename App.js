import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, Image, View, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://ih1.redbubble.net/image.5847131830.1094/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg',
          }}
        />

        <Text>E-Mail</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Digite o E-mail"
        />

        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Digite a Senha"
          secureTextEntry
        />
        <View style={styles.button}>
          <Button title="Logar" onPress={() => alert('Login pressionado')} />
        </View>
        <View style={styles.button}>
          <Button title="Resgistrar" onPress={() => alert('Login pressionado')} />
        </View>
        <Text style={styles.esqueciSenha}>Esqueceu sua senha?</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
  tinyLogo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
  esqueciSenha: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
});

export default TextInputExample;
