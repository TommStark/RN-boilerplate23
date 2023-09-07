import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {ThemeColors} from '../../themes/Colores';
import {IconButton, Text} from 'react-native-paper';
import {useAuth} from '../../providers/AuthContext';
import useUserLoginStore from '../../store/userStore';
import {useUserData} from '../../hooks/useUserData';
import AvatarChip from '../../components/AvatarChip';
import LinearGradient from 'react-native-linear-gradient';
import Card from '../../components/Card';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation}: Props) => {
  const {logout} = useAuth();
  const {user} = useUserLoginStore();
  const {meQuery} = useUserData(user.id);
  const {width} = Dimensions.get('window');

  if (meQuery.isLoading || meQuery.isFetching) {
    return <Text>Loading...</Text>;
  }

  return (
    <LinearGradient
      colors={[ThemeColors.background, 'white']}
      style={styles.gradientContainer}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.6}}>
      <View style={styles.container}>
        {/* NAVBAR */}
        <View style={{...styles.navBarContainer, width: width}}>
          <View style={styles.navBarChip}>
            <AvatarChip
              name={meQuery.data?.name.split(' ')[0] || ''}
              imageUrl="https://instagram.flpg3-1.fna.fbcdn.net/v/t51.2885-19/264678572_133663595710140_4664007730716980665_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.flpg3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=gvaAnXhJlv0AX8vLkbF&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBO0bBngRqsGWBILKJM67US-VwevGMZI3cMAN6FirrDkg&oe=64FEFE35&_nc_sid=ee9879"
              onPress={() => {
                navigation.navigate('Profile');
              }}
            />
          </View>
          <IconButton icon="logout" mode="contained" onPress={() => logout()} />
        </View>
        <Card />
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
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  navBarChip: {
    justifyContent: 'center',
  },
});
