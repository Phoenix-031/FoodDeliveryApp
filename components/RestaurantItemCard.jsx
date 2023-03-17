import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Surface } from 'react-native-paper'
import { Image } from 'react-native'

import { useFonts } from 'expo-font'

const RestaurantItemCard = ({item}) => {

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'SourceSerifPro-Regular': require('../assets/fonts/SourceSerifPro-Regular.ttf'),
    });
  
  return (
    <View style={{width:"100%", marginBottom:10, borderRadius:15, paddingVertical:12, paddingHorizontal:10, flexDirection:"row", gap:8, backgroundColor:"#28293d"}}>
        <View style={{flex:2}}>
            <Surface style={{backgroundColor:"#ffad16", fontFamily:'Poppins-Medium',width:90, justifyContent:"center",flexDirection:"row", borderRadius:10}}>
              <Text>{item.tag}</Text>
            </Surface>
            <Text style={{fontFamily:"Poppins-SemiBold", fontSize:20, color:"#e5e1d8"}}>{item.title}</Text>
            <View style={{width:"100%", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", paddingVertical:10}}>
                {/* <Badge style={{width:20, height:20, color:"#e5e1d8"}}>{item.rating}</Badge> */}
                <Text style={{color:"#e5e1d8"}}>{item.number_ratings} ratings</Text>
            </View>
            <Text style={{fontFamily:"Poppins-Bold", color:"#e5e1d8"}}>{item.price}</Text>
            <Text style={{fontFamily:"Poppins-SemiBold", color:"#e5e1d8"}}>{item.description}</Text>
        </View>
        <View style={{flex:1}}>
            <Image source={{uri: item.image_uri}} style={{height:100, width:100, resizeMode:"cover", borderRadius:12}} />
            <Button style={{borderColor:"gray", borderWidth:1, borderRadius:10, marginTop:10}} textColor="#ef845d" >ADD</Button>
        </View>
    </View>
  )
}

export default RestaurantItemCard

const styles = StyleSheet.create({})