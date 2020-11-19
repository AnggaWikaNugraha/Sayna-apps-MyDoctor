import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Router';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};
export default App;
