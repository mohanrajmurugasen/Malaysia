import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View,Text,Image, Button, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Img from "../../assets/img/pr.jpeg";

const India = (props) => {
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation(); 
  const navi = () => {
    navigation.navigate("login"); 
  }
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center",width:windowWidth}}>
      <Image source={Img} alt="nm" style={{width:300,height:300,borderRadius:200,borderWidth:5,borderColor:"black"}} />
      <View style={{paddingVertical:20,justifyContent:"center"}}>
        <Text style={{paddingHorizontal:30,textAlign:"center",fontWeight:"bold",fontSize:18,color:"#000080"}}>Y.BHG Dato' Hj.Ahmad Shalimin</Text>
        <Text style={{paddingHorizontal:30,textAlign:"center",paddingVertical:5,fontSize:18,letterSpacing:1}}>Ketua Bahagian </Text>
        <Text style={{paddingHorizontal:30,textAlign:"center",fontSize:18,letterSpacing:1}}>UMNO Taiping</Text>
      </View>
      <TouchableOpacity 
      onPress={navi}
      style={{backgroundColor:"#000080",paddingVertical:8,paddingHorizontal:30,borderRadius:5}}>
        <Text style={{color:"white",letterSpacing:1,fontSize:20}}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default India;