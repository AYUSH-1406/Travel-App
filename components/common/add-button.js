import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/theme';

const AddButton = (props) => {
    const {buttonText,onPress}=props;

  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.addBUtton}>
      <Text style={styles.buttonText}>{buttonText?buttonText:'ADD'}</Text>
    </View>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
    addBUtton:{
        backgroundColor:COLORS.ORANGE,
        paddingVertical:12,
        borderRadius:18,
        display:'flex',
        alignItems:'center',
    },
    buttonText:{
        color:COLORS.WHITE,
        fontSize:20,
        fontWeight:'700',
    }
});