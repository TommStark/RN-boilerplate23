import React, {useEffect} from 'react';
import {Divider, Button, TextInput, Text} from 'react-native-paper';
import {View, StyleSheet, Image} from 'react-native';
import {ThemeColors} from '../../themes/Colores';
import useLogin from '../../hooks/UseLogin';

// interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const {login, error} = useLogin();

  useEffect(() => {
    if (error) {
      setEmail('');
      setPassword('');
    }
  }, [error]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.image}
      />
      <Text variant="headlineLarge" style={styles.headlineText}>
        Fulbito App
      </Text>
      <TextInput
        error={error || false}
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        underlineColor={ThemeColors.black}
        activeUnderlineColor={ThemeColors.black}
        autoCapitalize="none"
      />
      <TextInput
        error={error || false}
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={secureTextEntry}
        underlineColor={ThemeColors.black}
        activeUnderlineColor={ThemeColors.black}
        right={
          <TextInput.Icon
            onPress={() => setSecureTextEntry(!secureTextEntry)}
            icon={!secureTextEntry ? 'eye' : 'eye-off'}
          />
        }
        style={styles.input}
      />
      {error && (
        <Text style={styles.textError}>
          El password o el email son incorrectos
        </Text>
      )}
      <Divider />
      <Button
        disabled={email === '' || password === ''}
        mode="contained"
        onPress={() => login(email, password)}
        buttonColor={ThemeColors.primary}
        style={styles.button}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    paddingHorizontal: 20,
    marginVertical: 100,
  },
  headlineText: {
    textAlign: 'center',
    color: ThemeColors.white,
  },
  input: {
    marginTop: 20,
  },
  button: {
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  textError: {
    color: ThemeColors.error,
    fontSize: 15,
    marginVertical: 10,
  },
});
