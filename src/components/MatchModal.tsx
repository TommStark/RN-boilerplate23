import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Modal, Portal, Text, Button} from 'react-native-paper';
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

interface Props {
  isVisible: boolean;
  onClose: () => void;
  matchData: MatchData | null;
}

const MatchModal: React.FC<Props> = ({isVisible, onClose, matchData}) => {
  const containerStyle = {
    backgroundColor: 'white',
    padding: 30,
    margin: 15,
    borderRadius: 10,
  };

  const teamHomePlayers = matchData?.players?.filter(
    player => player.team.toLowerCase() === matchData.teams.home.toLowerCase(),
  );

  const teamAwayPlayers = matchData?.players?.filter(
    player => player.team.toLowerCase() === matchData.teams.away.toLowerCase(),
  );

  return (
    <>
      {matchData && (
        <Portal>
          <Modal
            visible={isVisible}
            onDismiss={onClose}
            contentContainerStyle={containerStyle}>
            <Text style={styles.title}>Próximo Partido</Text>

            <View style={styles.row}>
              <Icon name="calendar" size={24} color="black" />
              <Text style={styles.text}>
                {matchData.date} - {matchData.time}
              </Text>
            </View>

            <View style={styles.row}>
              <Icon name="location-sharp" size={24} color="black" />
              <Text style={styles.text}>{matchData.location}</Text>
            </View>

            <View style={styles.row}>
              <Icon name="football" size={24} color="black" />
              <Text style={styles.text}>
                {matchData.teams.home} vs {matchData.teams.away}
              </Text>
            </View>

            <Text style={styles.subTitle}>Jugadores Confirmados</Text>

            <View style={styles.playersContainer}>
              <View style={styles.column}>
                <Text style={styles.teamTitle}>Blancos</Text>
                {teamHomePlayers?.map((player, index) => (
                  <View style={styles.playerItem} key={index}>
                    <Icon name="person" size={24} color="black" />
                    <Text style={styles.text}>{player.name}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.column}>
                <Text style={styles.teamTitle}>Negros</Text>
                {teamAwayPlayers?.map((player, index) => (
                  <View style={styles.playerItem} key={index}>
                    <Icon name="person" size={24} color="black" />
                    <Text style={styles.text}>{player.name}</Text>
                  </View>
                ))}
              </View>
            </View>

            <Button mode="contained" onPress={onClose} style={styles.button}>
              Cerrar
            </Button>
          </Modal>
        </Portal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
  teamTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
    padding: 5,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
  playersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  playerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default MatchModal;
