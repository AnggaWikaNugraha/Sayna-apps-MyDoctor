import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Router';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './redux/store';
import {useSelector} from 'react-redux';
import {Landing} from './components';
import {YellowBox} from 'react-native';

const MainApp = () => {
  const stateGlobal = useSelector((state) => state);
  YellowBox.ignoreWarnings(['Setting a timer']);

  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {stateGlobal.loading && <Landing />}
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
