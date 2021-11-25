import React from 'react'
import { ScrollView } from 'react-native';
import { View, Text, Image, Dimensions } from 'react-native'
import On from "../../assets/img/1.jpeg"
import On1 from "../../assets/img/2.jpeg"
import On2 from "../../assets/img/3.jpeg"
import On3 from "../../assets/img/4.jpeg"
import On4 from "../../assets/img/5.jpeg"
import On5 from "../../assets/img/6.jpeg"

const Gallery = () => {
    const windowWidth = Dimensions.get('window').width;
    return (
        <ScrollView style={{flex:1}}>
            <View style={{alignItems:"center",justifyContent:"center",marginTop:20}}>
                <Text style={{fontSize:18,fontWeight:"bold",paddingBottom:10,marginTop:20}}>Gallery</Text>
                <View style={{flexDirection:"row"}}>
                    <Image source={On} alt="hk" style={{width:180,height:180,borderRadius:5,margin:5}} />
                    <Image source={On1} alt="hk" style={{width:180,height:180,borderRadius:5,margin:5}} />
                </View>
                <View style={{flexDirection:"row"}}>
                    <Image source={On2} alt="hk" style={{width:180,height:180,borderRadius:5,margin:5}} />
                    <Image source={On3} alt="hk" style={{width:180,height:180,borderRadius:5,margin:5}} />
                </View> 
                <View style={{flexDirection:"row"}}>
                    <Image source={On4} alt="hk" style={{width:180,height:180,borderRadius:5,margin:5}} />
                    <Image source={On5} alt="hk" style={{width:180,height:180,borderRadius:5,margin:5}} />
                </View>
            </View>
        </ScrollView>
    )
}

export default Gallery
