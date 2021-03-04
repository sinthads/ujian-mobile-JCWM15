import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './src/navigation/MainNav';
import reducer from './src/redux/reducer';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({reducer, devTools: true});

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainNav />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
