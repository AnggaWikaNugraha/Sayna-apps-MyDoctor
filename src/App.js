import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Router';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </Provider>
  );
};
export default App;
