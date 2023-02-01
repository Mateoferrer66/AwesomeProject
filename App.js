import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nuevas Tecnologias del Desarrollo </Text>
      <Button
        title="Presioname ! 🤝"
        onPress={() => Alert.alert('Funciona !!! 🙌🙌🙌')}
      />
      <StatusBar style="auto" />
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
});
