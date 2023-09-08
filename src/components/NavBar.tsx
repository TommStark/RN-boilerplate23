import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import AvatarChip from './AvatarChip';
import { Chip } from 'react-native-paper';
import { useAuth } from '../providers/AuthContext';
import useUserLoginStore from '../store/userStore';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ThemeColors } from '../themes/Colores';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const renderIcon = (name: string) => {
  return <Icon name={name} size={18} color={ThemeColors.white} />;
};

export const NavBar = () => {
  const { logout } = useAuth();
  const { width } = Dimensions.get('window');
  const { userData } = useUserLoginStore();
  const navigation = useNavigation<StackNavigationProp<any, 'Profile'>>();

  return (
    <View style={{ ...styles.navBarContainer, width: width }}>
      <View style={styles.navBarChip}>
        <AvatarChip
          name={userData?.name.split(' ')[0] || ''}
          imageUrl="https://instagram.flpg3-1.fna.fbcdn.net/v/t51.2885-19/264678572_133663595710140_4664007730716980665_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.flpg3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=gvaAnXhJlv0AX8vLkbF&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBO0bBngRqsGWBILKJM67US-VwevGMZI3cMAN6FirrDkg&oe=64FEFE35&_nc_sid=ee9879"
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />
      </View>
      <Chip
        icon={() => renderIcon('logout')}
        onPress={() => logout()}
        textStyle={{ color: ThemeColors.white }}
        style={{
          backgroundColor: ThemeColors.backgroundTransparent,
        }}>
        Logout
      </Chip>
    </View>
  );
};

const styles = StyleSheet.create({
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 10,
    marginTop: 25,
  },
  navBarChip: {
    justifyContent: 'center',
  },
});
