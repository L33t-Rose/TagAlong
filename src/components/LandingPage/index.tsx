/* eslint-disable prettier/prettier */
import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Title} from 'react-native-paper';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const APP_NAME = 'Tag Along';

const CreateEvent = (props:any) => {
  const navigation= props.navigation;
  return(<Button mode="contained" onPress={() => navigation.navigate('CreateEvent')}>
    Create Event
  </Button>);
};


function LandingPage() {

  return (
    <SafeAreaView>
      <Title>{APP_NAME}</Title>
      <CreateEvent/>
    </SafeAreaView>
  );
}

export default LandingPage;
