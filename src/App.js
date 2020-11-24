import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Router';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './redux/store';
import {useSelector} from 'react-redux';
import {Landing} from './components';

const MainApp = () => {
  const [loading, setLoading] = useState(false);
  const stateGlobal = useSelector((state) => state);
  console.log(stateGlobal);

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
