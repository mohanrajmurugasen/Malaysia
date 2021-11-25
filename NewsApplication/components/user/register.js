import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions } from "react-native";
import axios from "axios";
import { useNavigation } from '@react-navigation/core';

export const Register = () => {

    const navigation = useNavigation();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState(""); 

    const submit = () => {
        axios.post("http://192.168.43.101:4000/register",{
            name: name,
            email: email,
            password: password
        }).then(res => {
            alert(res.data);
        }).catch(err => {
            console.error(err.message);
        })
    }

    const login = () => {
        navigation.navigate("login");
    }

    const {width,height} = Dimensions.get('window');

  return (
    <View style={{width: width,backgroundColor:"white",padding:15,height: height,paddingTop:25}}>
        <View style={{borderColor:"gray",borderWidth:1,borderRadius:8,paddingVertical:20,paddingHorizontal:20}}>
            <Text style={{textAlign:"center",fontSize:22,fontWeight:"700"}}>Create your account</Text>
            <Text style={{textAlign:"center",fontSize:16,paddingVertical:5,color:"gray"}}>It is quick and easy.</Text>
            <View style={{paddingHorizontal:20,paddingVertical:10}}>
                <TextInput 
                placeholder="Enter name..." 
                style={{borderColor:"gray",borderBottomWidth:1,borderRadius:8,paddingVertical:9,paddingLeft:10,borderRadius:6,marginTop:5,fontSize:16,color:"black"}} 
                value={name}
                onChangeText={txt => setName(txt)}
                />
            </View>
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
            onPress={submit}
            >
                <Text style={{backgroundColor:"hsl(206,100%,52%)",borderRadius:8,paddingVertical:9,textAlign:"center",fontSize:18,color:"white"}}>Register</Text>
            </TouchableOpacity>
            <View style={{alignItems:"center",marginVertical:15}}>
                <Text style={{borderColor:"gray",borderWidth:1,borderRadius:100,width:40,fontSize:20,height:40,paddingHorizontal:10,paddingVertical:5}}>or</Text>
            </View>
            <View>
                <Text style={{textAlign:"center",fontSize:18,color:"gray",paddingVertical:10}} >Have an account?</Text>
                <Text style={{textAlign:"center",fontSize:18,color:"hsl(206,100%,52%)"}} onPress={login} >Login</Text>
            </View>
        </View>
    </View>
  );
};