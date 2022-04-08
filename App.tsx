import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import Main from './src/Main';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Main />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
