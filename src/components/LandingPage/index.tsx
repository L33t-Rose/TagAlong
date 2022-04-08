/* eslint-disable prettier/prettier */
import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Title} from 'react-native-paper';
import { Button } from 'react-native-paper';

const APP_NAME = 'Tag Along';

const CreateEvent = () => (
  <Button icon="mdiBullhornVariantOutline" mode="contained" onPress={() => console.log('To Event Create Page')}>
    Create Event
  </Button>
);


function LandingPage() {

  return (
    <SafeAreaView>
      <Title>{APP_NAME}</Title>
      <CreateEvent></CreateEvent>
    </SafeAreaView>
  );
}

export default LandingPage;
