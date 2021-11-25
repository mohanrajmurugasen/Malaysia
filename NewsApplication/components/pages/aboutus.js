import React from 'react'
import { ScrollView } from 'react-native'
import { View, Text, Image } from 'react-native'
import Img from "../../assets/img/bas.png"

const AboutUs = () => {
    return (
        <ScrollView>
        <View style={{marginTop:30,flex:1,alignItems:"center",paddingHorizontal:20}}>
            <Image source={Img} alt="mn" style={{marginBottom:20}} />
            <Text style={{fontSize:17,fontWeight:"700"}}>
                The National Front (Malay: Barisan Nasional; abbrev: BN) is a political coalition of Malaysia that was founded in 1973 as a coalition of right-wing and centrist parties. It is also the third largest political coalition with 42 seats in the Dewan Rakyat after opposition coalition Pakatan Harapan with 88 seats and the coalition Perikatan Nasional with 50 seats.The Barisan Nasional coalition employs the same inter-communal governing model of its predecessor the Alliance Party but on a wider scale, with up to 14 communal political parties involved in the coalition at one point.[1] It dominated Malaysian politics for over thirty years after it was founded, but since 2008 has faced stronger challenges from opposition parties, notably the Pakatan Rakyat and later the Pakatan Harapan alliances. Taken together with its predecessor (Alliance), it had a combined period of rule from 1957 to 2018, and was considered the longest ruling coalition party in the democratic world.
            </Text> 
        </View>
        </ScrollView>
    )
}

export default AboutUs