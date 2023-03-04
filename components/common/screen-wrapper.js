import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/theme';

const ScreenWrapper = ({children}) => {
  return (
    <View style={styles.screenWrapper}>
     {children}
    </View>
  )
}

export default ScreenWrapper;

const styles = StyleSheet.create({
    screenWrapper:{
        paddingTop:Platform.OS==='android'?40:60,
        paddingHorizontal:18,
        paddingBottom:32,
        backgroundColor:COLORS.BACKGROUND,
        minHeight:'100%',
    }
})