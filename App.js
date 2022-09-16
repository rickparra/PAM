import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <div style={styles.div}>
        <Text style={styles.texto}>Login</Text>
        <Image
          source={bola}
          style={styles.img}
        />
      </div>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    textAlign: 'center',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  div: {
    //backgroundColor: '#000',
    height: "20vh",
    width: "30vw",
    textAlign: 'center',
  },
  img: {
    height: "20vh",
    width: "30vw"
  },
  texto: {
    color: '#000',
    fontSize: "40px"
  },
});
const form = styles.textinput