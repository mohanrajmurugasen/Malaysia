import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TopBar from '../topbar/topBar';
import Bookmark from './tabs/bookmark';
import Epaper from './tabs/ePaper';
import Notification from './tabs/notification';
import Settings from './tabs/settings';
import Icon from 'react-native-vector-icons/Ionicons';
import India from '../pages/india';

const Tab = createMaterialBottomTabNavigator();

const BottomTab = (props) => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="black"
    inactiveColor="gray"
    barStyle={{ backgroundColor: 'white' }}
    > 
      <Tab.Screen name="Home" component={India} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" style={{color:"gray",fontSize:25}} />
          ),
        }} />
      <Tab.Screen name="Notifications" component={Notification} options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications-outline" style={{color:"gray",fontSize:25}} />
          ),
        }} />
      <Tab.Screen name="Menu" component={Settings} options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color }) => (
            <Icon name="md-settings-outline" style={{color:"gray",fontSize:25}} />
          ),
        }} />
    </Tab.Navigator>
  );
};

export default BottomTab;