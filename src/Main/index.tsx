import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LandingPage from '../components/LandingPage';
import CreateEventPage from '../components/CreateEventPage';

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerShown:false
        }
      }>
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="CreateEvent" component={CreateEventPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
