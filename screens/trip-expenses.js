import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackButton from '../components/common/back-button';
import { COLORS } from '../theme/theme';
import ScreenWrapper from '../components/common/screen-wrapper'
import ExpenseCard from '../components/trips/expense-card';
import EmptyExpenses from '../components/trips/empty-expenses';
import { useSelector } from 'react-redux';
import { initializeUseSelector } from 'react-redux/es/hooks/useSelector';


const TripExpenses = ({navigation,route}) => {
  const selectedTrips=route.params;

  const expenses=useSelector(state=>{
  const trips=state.trips.trips;
  const expensesToBeShown=trips.filter(trip=>trip.id===selectedTrips.id);
  if(expensesToBeShown.length>0){
    return expensesToBeShown[0].expenses;
  }
  return [];
 });
  return (
    <ScreenWrapper>
    <View>
      <BackButton onPress={()=>navigation.goBack()}/>
      <View style={styles.bannerContainer}>
        <Image source={selectedTrips.banner} style={styles.banner}/>
        <View style={styles.placeContainer}>
          <Text style={styles.place}>{selectedTrips.place}</Text>
        </View>
      </View>
      <View style={styles.txtBtn}>
        <Text style={styles.subHeading}>Expenses</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Add Expenses',selectedTrips)}>
          <Text style={styles.buttonText}>Add Expense</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flatlistContainer}>
        <FlatList data={expenses} renderItem={({item})=>
      <ExpenseCard expense={item} />}
      showsVerticalScrollIndicator={false}
      keyExtractor={item=>item.id}
      ListEmptyComponent={<EmptyExpenses/>}
      />
      </View>
    </View>
    </ScreenWrapper>
  )
}

export default TripExpenses;

const styles = StyleSheet.create({
  banner:{
    height:240,
    width:"125%",
    resizeMode:'cover',
  },
  bannerContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
  },
  place:{
    textAlign:'center',
    color:COLORS.DARK_ORANGE,
    fontSize:20,
    fontWeight:'700',
  },
  placeContainer:{
    backgroundColor:COLORS.WHITE,
    minWidth:'50%',
    paddingVertical:12,
    borderRadius:18,
    position:'absolute',
    bottom:-20,
  },
  buttonText:{
    color:COLORS.DARK_ORANGE,
    fontWeight:'700',
  },
  txtBtn:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:32,
    marginBottom:24,
  },
  subHeading:{
    fontSize:18,
    fontWeight:'600',
    color:COLORS.TEXT,
  },
});