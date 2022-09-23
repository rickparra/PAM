import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/cachorro.jpg';
import user from './assets/user.png';
import pin from './assets/pin.png';

export default function App() {
  return (
    <View style={styles.container}>
      <br>
      </br>
      <Text style={styles.nome}>Barbara</Text>
      <Text style={styles.p}>Cachorro|Fêmea|Adulto|Porte pequeno</Text>
      <br>
      </br>
      <Image source={logo} style={{ width: '40%', height: '50%' }} />
      <br>
      </br>
      <View style={styles.box}>
        <Text style={styles.p2}><Image source={user} style={{ width: '24px', height: '28px'}} /> Publicado por Ana Paula em 23/09/2022 </Text>
        <br>
        </br>
        <Text style={styles.p3}><Image source={pin} style={{ width: '24px', height: '24px'}} /> Está em São Paulo, São Paulo </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  nome: {
    fontSize: '48px',
    color: '#8b008b'
  },
  p: {
    fontSize: '20px',
    color: '#696969',
    paddingRight: '19%'
  },
  p2: {
    fontSize: '18px',
  },
  p3: {
    fontSize: '18px',
  }
});
