import React from 'react';
import { View,Text } from 'react-native';

const Notification = (props) => {
  return (
    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
      <Text style={{fontSize:18,fontWeight:"bold",letterSpacing:1}}>Notification</Text>
    </View> 
  );
};

export default Notification;