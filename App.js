import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/cachorro.png';

export default function App() {
  return (
    <View style={styles.container}>
      <br>
      </br>
      <Image source={logo} style={{ width: '50%', height: '38%' }} />
      <br>
      </br>
      <Text style={styles.nome}>Barbara</Text>
      <Text style={styles.p}>Cachorro | Fêmea | Adulto | Porte médio</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '10%',
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  nome: {
    fontSize: '40px',
    color: '#8b008b'
  },
  p: {
    fontSize: '10px',
    
  }
});
