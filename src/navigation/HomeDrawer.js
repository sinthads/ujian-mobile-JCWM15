import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AccountScreen from '../screen/AccountScreen';
import HomeTab from './HomeTab';

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen name="Feed" component={HomeTab} />
      <Drawer.Screen name="Account" component={AccountScreen} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
