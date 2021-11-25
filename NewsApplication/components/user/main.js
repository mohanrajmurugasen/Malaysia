import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Dimensions } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Main = () => {

  const navigation = useNavigation();

  const windowWidth = Dimensions.get('window').width;

  const [menu,setMenu] = useState([
    {name:"About Us"},
    {name:"News"},
    {name:"Gallery"},
    {name:"Programs"},
    {name:"Welfare"},
    {name:"Education"},
    {name:"Work Opportunities"},
    {name:"Tourism"},
    {name:"E-Tender information"},
    {name:"Sports"},
    {name:"Youth"},
    {name:"Helpline"},
    {name:"Contact us"},
  ]) 

  const pressing = (x) => {
    if(x === "About Us") {
      navigation.navigate("aboutus");
    } else if(x === "News") {
      navigation.navigate("news");
    } else if(x === "Gallery") {
      navigation.navigate("gallery");
    }
  }

  return (
    <ScrollView style={{width: windowWidth,marginTop:35}}>
      <View style={{paddingHorizontal:15,paddingVertical:10,alignItems:"center"}}>
        <View style={{alignItems:"center",paddingBottom:30}}>
        <Text style={{fontSize:22,fontWeight:"700",backgroundColor:"#000080",width:200,textAlign:"center",color:"white",borderRadius:10,paddingVertical:8}}>Home</Text>
        </View>
        { menu.map((itm,index) => (
          <View style={{justifyContent:"center"}} key={index}>
          <TouchableOpacity style={{paddingVertical:10,paddingHorizontal:20,backgroundColor:"white",marginVertical:8,width:300,borderRadius:5}} onPress={() => pressing(itm.name)}>
            <Text style={{color:"black",fontSize:18,textAlign:"center",fontWeight:"bold"}}>{itm.name}</Text>
          </TouchableOpacity>
          </View>
        )) }
      </View>
    </ScrollView>
  );
};