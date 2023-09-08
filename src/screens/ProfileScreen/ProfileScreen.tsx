/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';
import {ThemeColors} from '../../themes/Colores';
import useUserLoginStore from '../../store/userStore';
import {UserProfile} from '../../interfaces/user';
import {useNavigation} from '@react-navigation/native';

const URL =
  'https://instagram.flpg3-1.fna.fbcdn.net/v/t51.2885-19/264678572_133663595710140_4664007730716980665_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.flpg3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=gvaAnXhJlv0AX8vLkbF&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBO0bBngRqsGWBILKJM67US-VwevGMZI3cMAN6FirrDkg&oe=64FEFE35&_nc_sid=ee9879';

export const ProfileScreen = () => {
  const {userData} = useUserLoginStore();
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      headerShown: true,
      headerBackTitle: 'Back',
    });
  }, []);

  const userProfile: UserProfile = {
    avatarUrl: URL,
    fullName: userData.name,
    username: userData.username,
    email: userData.email,
    dateOfBirth: '01/01/1990',
    phoneNumber: userData.phone,
  };

  return (
    <View style={styles.container}>
      <Avatar.Image
        size={100}
        source={{
          uri: userProfile.avatarUrl,
        }}
      />
      <Card style={styles.card}>
        <Card.Content>
          <Title>{userProfile.fullName}</Title>
          <Paragraph>{userProfile.username}</Paragraph>
          <Paragraph>Email: {userProfile.email}</Paragraph>
          <Paragraph>Fecha de Nacimiento: {userProfile.dateOfBirth}</Paragraph>
          <Paragraph>Teléfono: {userProfile.phoneNumber}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
    alignItems: 'center',
    padding: 16,
  },
  card: {
    width: '100%',
    marginTop: 16,
  },
});
