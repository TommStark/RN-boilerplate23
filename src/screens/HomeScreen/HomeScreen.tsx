/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import {ThemeColors} from '../../themes/Colores';
import {Text} from 'react-native-paper';
import useUserLoginStore from '../../store/userStore';
import {useUserData} from '../../hooks/useUserData';
import LinearGradient from 'react-native-linear-gradient';
import Card from '../../components/Card';
import {NavBar} from '../../components/NavBar';

export const HomeScreen = () => {
  const {user, setUserData} = useUserLoginStore();
  const {meQuery} = useUserData(user.id);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setUserData(meQuery.data);
  }, [meQuery.isFetching, meQuery.isLoading]);

  const onRefresh = () => {
    setRefreshing(true);
    // Logic to fetch new data
    setRefreshing(false);
  };

  if (meQuery.isLoading || meQuery.isFetching) {
    return <Text>Loading...</Text>;
  }

  if (meQuery.isError) {
    return <Text>Error loading data</Text>;
  }

  return (
    <LinearGradient
      colors={[ThemeColors.background, 'white']}
      style={styles.gradientContainer}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.6}}>
      <View style={styles.container}>
        {/* NAVBAR */}
        <NavBar />
        {/* BODY */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <Card />
          {/* Other cards or content goes here */}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
  },
  container: {
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 30,
  },
  headlineText: {
    textAlign: 'center',
    color: ThemeColors.white,
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
});
