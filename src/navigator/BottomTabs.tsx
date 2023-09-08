import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { ThemeColors } from '../themes/Colores';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MatchesScreen } from '../screens/MatchesScreen/MatchesScreen';
import { StatsScreen } from '../screens/StatsScreen/StatsScreen';
import { StyleSheet } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs: any = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={ThemeColors.background}
      inactiveColor={ThemeColors.grey}
      sceneAnimationEnabled={true}
      theme={{ colors: { secondaryContainer: 'transparent' } }}
      barStyle={styles.bar}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: 'home-outline',
        }}
      />
      <Tab.Screen
        name="Matches"
        component={MatchesScreen}
        options={{
          tabBarIcon: 'soccer',
        }}
      />
      <Tab.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          tabBarIcon: 'star-outline',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bar: {
    backgroundColor: ThemeColors.white,
    height: 85,
    borderTopColor: Colors.grey400,
    shadowColor: Colors.grey400,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 0.5,
  },
});
