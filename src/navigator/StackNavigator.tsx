import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen/LoginScreen';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {ThemeColors} from '../themes/Colores';
import {useAuth} from '../providers/AuthContext';
import {ActivityIndicator} from 'react-native-paper';
import Container from '../components/Container';
import {ProfileScreen} from '../screens/ProfileScreen/ProfileScreen';

const Stack = createStackNavigator();

export function StackNavigator() {
  const {token, isLoading} = useAuth();

  if (isLoading) {
    return (
      <Container>
        <ActivityIndicator size="large" color={ThemeColors.primary} />
      </Container>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: ThemeColors.white},
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          shadowColor: 'transparent',
        },
      }}>
      {token !== null ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
