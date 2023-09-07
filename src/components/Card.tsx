import * as React from 'react';
import {Divider, Surface, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {ThemeColors} from '../themes/Colores';

const Card = () => (
  <Surface style={styles.surface} elevation={1}>
    <View
      style={{
        flex: 0.3,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        // backgroundColor: 'red',
      }}>
      <Text>Proximos Partidos</Text>
    </View>
    <View
      style={{
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        // backgroundColor: 'blue',
      }}>
      <Text variant="titleSmall">
        28/9/23 - 18hs - San antonio calle 29 n376
      </Text>
      <Divider />
      <Text variant="titleSmall">
        28/9/23 - 18hs - San antonio calle 29 n376
      </Text>
      <Divider />
      <Text variant="titleSmall">
        28/9/23 - 18hs - San antonio calle 29 n376
      </Text>
      <Divider />
    </View>
  </Surface>
);

export default Card;

const styles = StyleSheet.create({
  surface: {
    padding: 4,
    height: 220,
    width: 360,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: ThemeColors.white,
  },
});
