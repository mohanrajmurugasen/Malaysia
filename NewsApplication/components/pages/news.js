import React from 'react'
import { ScrollView } from 'react-native'
import { View, Text, Image } from 'react-native'
import Img from "../../assets/img/flag.jpeg"

const News = () => {
    return (
        <ScrollView>
        <View style={{marginTop:30,flex:1,alignItems:"center",paddingHorizontal:20}}>
            <Text style={{fontWeight:"bold",textAlign:"center",paddingVertical:10,fontSize:18}}>Resounding victory for Malaysia's Barisan Nasional in Melaka state election</Text>
            <Image source={Img} alt="mn" style={{marginBottom:20,width:300,height:200}} />
            <Text style={{fontSize:17,fontWeight:"700"}}>
                MELAKA: Malaysia's Barisan Nasional (BN) coalition has successfully retained control of Melaka, winning 21 out of 28 constituencies to defeat the other two major political blocs in the state’s 15th election on Saturday (Nov 20).
                Pakatan Harapan (PH), led by former chief minister Adly Zahari from Parti Amanah Negara (Amanah), won five seats, while BN’s federal partner, Perikatan Nasional (PN), only won two. 
                The election turnout as of 4pm was 61 per cent, said the Election Commission (EC).
                In a victory speech on Saturday night, BN chairman and UMNO president Ahmad Zahid Hamidi said the results showed a change in attitude by Melaka voters towards the BN. 
                "Melakans have returned the mandate to BN to form the state government. Their support is greatly appreciated," he said. 
                Ahmad Zahid was joined on stage by Prime Minister Ismail Sabri Yaakob and state election director Mohamad Hassan.
            </Text>
        </View> 
        </ScrollView>
    )
}

export default News
