import * as React from 'react';
import {Divider, Surface, Text} from 'react-native-paper';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ThemeColors} from '../themes/Colores';
import MatchModal from './MatchModal';
import Icon from 'react-native-vector-icons/Ionicons';
interface MatchData {
  date: string;
  time: string;
  teams: {
    home: string;
    away: string;
  };
  location: string;
  players: {
    name: string;
    team: string;
  }[];
}

const matches = [
  {
    date: '28/9/23',
    time: '18:00',
    location: 'San Antonio, Calle 29 N°376',
    teams: {
      home: 'Blanco',
      away: 'Negro',
    },
    players: [
      {name: 'Juan', team: 'blanco'},
      {name: 'Miguel', team: 'blanco'},
      {name: 'Fito', team: 'negro'},
      {name: 'Carlos', team: 'negro'},
      {name: 'Pedro', team: 'blanco'},
      {name: 'Lucas', team: 'negro'},
      {name: 'Mariano', team: 'blanco'},
      {name: 'Fernando', team: 'negro'},
      {name: 'Alejandro', team: 'blanco'},
      {name: 'Gabriel', team: 'negro'},
    ],
  },
  {
    date: '30/9/23',
    time: '20:00',
    location: 'Parque Central, Calle 50 N°100',
    teams: {
      home: 'Blanco',
      away: 'Negro',
    },
    players: [
      {name: 'Gonzalo', team: 'blanco'},
      {name: 'Fernando', team: 'blanco'},
      {name: 'Roberto', team: 'negro'},
      {name: 'Daniel', team: 'negro'},
      {name: 'Jorge', team: 'blanco'},
      {name: 'Guillermo', team: 'negro'},
      {name: 'Damián', team: 'blanco'},
      {name: 'Sebastian', team: 'negro'},
      {name: 'Adrián', team: 'blanco'},
      {name: 'Sergio', team: 'negro'},
    ],
  },
  {
    date: '2/10/23',
    time: '16:00',
    location: 'Estadio Local, Calle 70 N°200',
    teams: {
      home: 'Blanco',
      away: 'Negro',
    },
    players: [
      {name: 'Rodrigo', team: 'blanco'},
      {name: 'Martín', team: 'blanco'},
      {name: 'Tomás', team: 'negro'},
      {name: 'Leo', team: 'negro'},
      {name: 'Nicolás', team: 'blanco'},
      {name: 'Emilio', team: 'negro'},
      {name: 'Facundo', team: 'blanco'},
      {name: 'Gastón', team: 'negro'},
      {name: 'Iván', team: 'blanco'},
      {name: 'Diego', team: 'negro'},
    ],
  },
];

const Card = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [matchSelected, setMatchSelected] = React.useState<MatchData | null>(
    null,
  );

  const onCloseModal = () => {
    setIsVisible(false);
  };

  const renderItem = ({item, index}: {item: MatchData; index: number}) => (
    <>
      <View style={styles.itemContainer} key={index + item.date}>
        <TouchableOpacity
          style={styles.itemTouchable}
          onPress={() => {
            setMatchSelected(item);
            setIsVisible(true);
          }}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemText}>{item.date}</Text>
            <Text style={styles.itemText}>{item.time}</Text>
          </View>
          <View style={styles.itemLocation}>
            <Icon name="location" size={24} color={ThemeColors.primary} />
            <Text style={styles.itemText}>{item.location}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Divider />
    </>
  );

  return (
    <Surface style={styles.surface}>
      <View style={styles.headerContainer}>
        <Text> ** Proximos Partidos **</Text>
      </View>
      <View style={styles.listContainer}>
        {matches
          .slice(0, 2)
          .map((match, index) => renderItem({item: match, index: index}))}
      </View>
      <MatchModal
        isVisible={isVisible}
        onClose={onCloseModal}
        matchData={matchSelected}
      />
    </Surface>
  );
};

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
  header: {
    flex: 0.15,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textStyle: {
    marginVertical: 5,
  },
  itemContainer: {
    marginBottom: 10,
  },
  itemTouchable: {
    flexDirection: 'column',
  },
  itemInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  itemLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginVertical: 5,
    fontSize: 16,
    paddingHorizontal: 5,
  },
  iconStyle: {
    marginRight: 8,
  },
  headerContainer: {
    flex: 0.1,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#f9f9f9',
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  listItemText: {
    marginLeft: 10,
  },
});

export default Card;
