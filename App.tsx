import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Platform, SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {PaperProvider} from 'react-native-paper';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StackNavigator} from './src/navigator/StackNavigator';
import {ThemeColors} from './src/themes/Colores';
import {AuthProvider} from './src/providers/AuthContext';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: ThemeColors.background,
    // color: !isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const client = new QueryClient();

  useEffect(() => {
    Platform.OS === 'android' && SplashScreen.hide();
  }, []);

  return (
    <AuthProvider>
      <QueryClientProvider client={client}>
        <NavigationContainer>
          <PaperProvider>
            <SafeAreaView style={backgroundStyle}>
              <StatusBar
                barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
              />
              <StackNavigator />
            </SafeAreaView>
          </PaperProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
