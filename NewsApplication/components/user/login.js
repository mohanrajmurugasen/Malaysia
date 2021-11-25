import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, Image } from "react-native";
import axios from "axios";
import Log from "../../assets/img/bas.png"
import { useNavigation } from '@react-navigation/core';

export const Login = () => {

    const navigation = useNavigation();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const login = () => {
        navigation.navigate("main");
    }

    const create = () => {
        navigation.navigate("main");
    }

    const {width,height} = Dimensions.get('window');

  return (
    <View style={{width: width,backgroundColor:"white",padding:15,height: height,paddingTop:25,flex:1,justifyContent:"center"}}>
        <View style={{alignItems:"center",paddingBottom:15}}>
            <Image source={Log} alt="mn" style={{borderRadius:10}} />
        </View>
        <View style={{borderColor:"gray",borderWidth:1,borderRadius:8,paddingVertical:20,paddingHorizontal:20}}>
            <Text style={{textAlign:"center",fontSize:22,fontWeight:"700"}}>SignIn</Text>
            <View style={{paddingHorizontal:20,paddingVertical:10}}>
                <TextInput 
                placeholder="Enter email..." 
                style={{borderColor:"gray",borderBottomWidth:1,borderRadius:8,paddingVertical:9,paddingLeft:10,borderRadius:6,marginTop:5,fontSize:16,color:"black"}} 
                value={email}
                onChangeText={txt => setEmail(txt)}
                />
            </View>
            <View style={{paddingHorizontal:20,paddingVertical:10}}>
                <TextInput 
                placeholder="Enter password..." 
                style={{borderColor:"gray",borderBottomWidth:1,borderRadius:8,paddingVertical:9,paddingLeft:10,borderRadius:6,marginTop:5,fontSize:16,color:"black"}} 
                value={password}
                onChangeText={txt => setPassword(txt)}
                />
            </View>
            <TouchableOpacity 
            style={{paddingHorizontal:20,paddingVertical:20,marginTop:10}}
            onPress={login}
            >
                <Text style={{backgroundColor:"#000080",borderRadius:8,paddingVertical:9,textAlign:"center",fontSize:18,color:"white"}}>Login</Text>
            </TouchableOpacity>
            <View style={{alignItems:"center",marginVertical:15}}>
                <Text style={{borderColor:"gray",borderWidth:1,borderRadius:100,width:40,fontSize:20,height:40,paddingHorizontal:10,paddingVertical:5}}>or</Text>
            </View>
            <View>
                <Text style={{textAlign:"center",fontSize:18,color:"gray",paddingVertical:10}} >Don't have an account?</Text>
                <Text style={{textAlign:"center",fontSize:18,color:"#000080"}} onPress={create} >Create One Now</Text>
            </View>
        </View>
    </View>
  );
}; 