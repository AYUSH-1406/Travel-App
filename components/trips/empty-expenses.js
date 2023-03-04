import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IMAGES } from '../../assets/assets';

const EmptyExpenses = () => {
  return (
    <View style={styles.emptyList}>
        <Image source={IMAGES.EMPTY_EXPENSES} style={styles.banner}/>
      <Text style={styles.emptyText}>No Expenses for this Trip.</Text>
    </View>
  );
};

export default EmptyExpenses;

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