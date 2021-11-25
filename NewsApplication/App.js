import React from 'react';
//import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './components/bottomtab/bottomTab';
import { Login } from './components/user/login';
import { Register } from './components/user/register';
import { Main } from './components/user/main';
import News from './components/pages/news';
import AboutUs from './components/pages/aboutus';
import Gallery from './components/pages/gallery';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      {/* <StatusBar barStyle="light-content" backgroundColor= "white" /> */}
      <Stack.Navigator initialRouteName="bottom">
        <Stack.Screen name="bottom" component={BottomTab} options={{headerShown: false}} />
        <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="register" component={Register} options={{title:"The Indian Express"}} />
        <Stack.Screen name="main" component={Main} options={{headerShown: false}} />
        <Stack.Screen name="news" component={News} options={{headerShown: false}} />
        <Stack.Screen name="aboutus" component={AboutUs} options={{headerShown: false}} />
        <Stack.Screen name="gallery" component={Gallery} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 
