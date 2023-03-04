import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IMAGES } from '../../assets/assets';

const EmptyList = () => {
  return (
    <View style={styles.emptyList}>
        <Image source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-3609561-3016826.png'}} style={styles.banner}/>
      <Text style={styles.emptyText}>No Trips Yet!</Text>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
    emptyList:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:24,
    },
    emptyText:{
        fontSize:14,
        fontWeight:"600",
        marginTop:15,
    },
    banner:{
        height:240,
        width:240,
    },
    
});