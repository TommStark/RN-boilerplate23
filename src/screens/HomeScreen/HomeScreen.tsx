import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {ThemeColors} from '../../themes/Colores';
import {Button, IconButton, Text} from 'react-native-paper';
import {useAuth} from '../../providers/AuthContext';
import useUserLoginStore from '../../store/userStore';
import {useUserData} from '../../hooks/useUserData';
import AvatarChip from '../../components/AvatarChip';

export const HomeScreen = () => {
  const {logout} = useAuth();
  const {user} = useUserLoginStore();
  console.log('user: ', user);
  const {meQuery} = useUserData(user.id);
  const {width} = Dimensions.get('window');

  if (meQuery.isLoading || meQuery.isFetching) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      {/* NAVBAR */}
      <View style={{...styles.navBarContainer, width: width}}>
        <View style={styles.navBarChip}>
          <AvatarChip
            name={meQuery.data?.name}
            imageUrl="https://instagram.flpg3-1.fna.fbcdn.net/v/t51.2885-19/264678572_133663595710140_4664007730716980665_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.flpg3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=gvaAnXhJlv0AX8vLkbF&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBO0bBngRqsGWBILKJM67US-VwevGMZI3cMAN6FirrDkg&oe=64FEFE35&_nc_sid=ee9879"
            onPress={() => {
              console.log('pressed');
            }}
          />
        </View>
        <IconButton
          icon="gift"
          mode="contained"
          onPress={() => console.log('Pressed')}
        />
      </View>

      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.image}
      />
      <Button
        // icon="login"
        mode="contained"
        onPress={() => logout()}
        buttonColor={ThemeColors.primary}
        style={styles.button}>
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50,
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
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 100,
  },
  navBarChip: {
    justifyContent: 'center',
  },
});
