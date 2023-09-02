import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.bordesTexto}>Probando otro texto en react native</Text>
      </View>
      <Text style={styles.bordesTexto}>Vamos a aprender lo basico de RN</Text>
      <Button title='Hola perro'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bordesTexto: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'blue',
    padding: 16
  }
});
