import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export const Screen1 = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Screen 1</Text>
    <Button title="Go to Screen 2" onPress={() => navigation.push('Screen2')} />
    <StatusBar style="auto" />
  </View>
);

export const Screen2 = () => (
  <View style={styles.container}>
    <Text>Screen 2</Text>
    <StatusBar style="auto" />
  </View>
);
const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
    <Stack.Screen name="Screen1" component={Screen1} />
    <Stack.Screen name="Screen2" component={Screen2} />
  </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',

    alignItems: 'center',
    justifyContent: 'center',
  },
});
