import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home';
import Map from './src/Map';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
		<Stack.Navigator initialRouteName='Home'>
			<Stack.Screen 
				name="Home" 
				component={Home}
				options={{
					headerShown: false
				}}
			/>
			<Stack.Screen 
				name='Map' 
				component={Map}
				options={{
					headerShown: false
				}}
			/>
		</Stack.Navigator>
		<StatusBar style="auto" />
    </NavigationContainer>
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
