import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import { ThemeColors } from '../themes/Colores';
import { useAuth } from '../providers/AuthContext';
import { ActivityIndicator } from 'react-native-paper';
import Container from '../components/Container';
import { ProfileScreen } from '../screens/ProfileScreen/ProfileScreen';
import { BottomTabs } from './BottomTabs';

export type HomeScreenProps = {};

export type LoginScreenProps = {};

export type ProfileScreenProps = {};

export type StackParamList = {
  Home: HomeScreenProps;
  Login: LoginScreenProps;
  Profile: ProfileScreenProps;
};

const Stack = createStackNavigator<StackParamList>();

interface AuthContextType {
  token: string | null;
  isLoading: boolean;
}

export function StackNavigator() {
  const { token, isLoading } = useAuth() as AuthContextType;

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
        headerTitleStyle: {
          color: ThemeColors.white,
        },
        headerBackTitleStyle: {
          color: ThemeColors.white,
        },
        headerTintColor: ThemeColors.white,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          shadowColor: 'transparent',
          backgroundColor: ThemeColors.background,
        },
      }}>
      {token !== null ? (
        <Stack.Screen
          name="Home"
          component={BottomTabs}
          options={{ title: 'Home' }}
        />
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
      )}
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Stack.Navigator>
  );
}
