import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import FeedScreen from '../screen/FeedScreen';
import UpdateScreen from '../screen/UpdateScreen';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={FeedScreen} />
      <Tab.Screen name="Update" component={UpdateScreen} />
    </Tab.Navigator>
  );
};

export default HomeTab;
