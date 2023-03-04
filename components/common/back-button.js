import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ICONS } from '../../assets/assets';
import { COLORS } from '../../theme/theme';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const BackButton = (props) => {
    const {onPress}=props;
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.iconWrapper}>
      <Image source={ICONS.BACK} style={styles.backIcon}/>
    </View>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  iconWrapper:{
    padding:6,
    backgroundColor:COLORS.WHITE,
    borderRadius:25,
    width:40,
  },
  backIcon:{
    height:25,
    width:25,
  }
});