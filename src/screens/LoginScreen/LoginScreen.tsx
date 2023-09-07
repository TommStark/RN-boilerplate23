import React, {useEffect} from 'react';
import {Button, TextInput, Text} from 'react-native-paper';
import {View, StyleSheet, Image} from 'react-native';
import {ThemeColors} from '../../themes/Colores';
import useLogin from '../../hooks/UseLogin';
import LinearGradient from 'react-native-linear-gradient';

export const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);
  const {login, error} = useLogin();

  useEffect(() => {
    if (error) {
      setEmail('');
      setPassword('');
      setHasError(true);
    }
  }, [error]);

  return (
    <LinearGradient
      colors={[ThemeColors.background, 'white']}
      style={styles.gradientContainer}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.7}}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/logo1.png')}
          style={styles.image}
        />
        <Text variant="headlineLarge" style={styles.headlineText}>
          Fulbito App
        </Text>
        <TextInput
          label={<Text style={{color: ThemeColors.black}}>Email</Text>}
          value={email}
          onChangeText={text => setEmail(text)}
          onFocus={() => setHasError(false)}
          style={styles.input}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          autoCapitalize="none"
        />
        <TextInput
          label={<Text style={{color: ThemeColors.black}}>Password</Text>}
          value={password}
          onChangeText={text => setPassword(text)}
          onFocus={() => setHasError(false)}
          secureTextEntry={secureTextEntry}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          right={
            <TextInput.Icon
              onPress={() => setSecureTextEntry(!secureTextEntry)}
              icon={!secureTextEntry ? 'eye' : 'eye-off'}
            />
          }
          style={styles.input}
        />
        {hasError && (
          <Text style={styles.textError}>
            El password o el email son incorrectos
          </Text>
        )}
        <Button
          disabled={email === '' || password === ''}
          mode="contained"
          onPress={() => login(email, password)}
          buttonColor={ThemeColors.background}
          style={styles.button}>
          Login
        </Button>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    alignContent: 'center',
  },
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
    backgroundColor: ThemeColors.white,
    borderRadius: 20,
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
