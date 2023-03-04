import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RANDOM_THUMBNAIL } from '../assets/assets';
import BackButton from '../components/common/back-button';
import ScreenWrapper from '../components/common/screen-wrapper';
import { COLORS } from '../theme/theme';
import AddButton from '../components/common/add-button';
import { useDispatch } from 'react-redux';
import { addTrip } from '../redux/slice/trips';

const AddTrip = ({navigation}) => {
  const [placeBanner, setPlaceBanner] = useState();
  const[place,setPlace]=useState('');
  const[country,setCountry]=useState('');

  useEffect(() => {
    setPlaceBanner(RANDOM_THUMBNAIL());
  }, []);

  const dispatch=useDispatch();
  const handleAddTrip=()=>{
    const tripData={
      id:Date.now(),
      place,
      country,
      banner:placeBanner,
      expenses:[],
    };
    dispatch(addTrip(tripData));
    navigation.navigate('Home');
  };

  return (
    <ScreenWrapper>
      <View style={styles.addTripWrapper}>
        <View>
          <BackButton onPress={()=>navigation.goBack()} />
          <View style={styles.bannerContainer}> 
          <Image source={placeBanner} style={styles.banner}/>
          </View>
          <View style={styles.form}>
            <View style={styles.formItem}>
              <Text style={styles.subHeading}>Where on Earth?</Text>
              <TextInput value={place} onChangeText={e=>setPlace(e)} style={styles.input}/>
            </View>
            <View style={styles.formItem}>
              <Text style={styles.subHeading}>Where country?</Text>
              <TextInput value={country} onChangeText={e=>setCountry(e)} style={styles.input}/>
            </View>

          </View>
        </View>
        <AddButton buttonText={'ADD TRIP'} onPress={handleAddTrip}/>
      </View>
    </ScreenWrapper>
  );
};

export default AddTrip;

const styles = StyleSheet.create({
  addTripWrapper:{
    display:'flex',
    justifyContent:'space-between',
    height:'100%',
  },
  banner:{
    height:240,
    width:'120%',
    resizeMode:'cover',
  },
  bannerContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  form:{
    marginVertical:24,
  },
  formItem:{
    marginVertical:16,
  },
  input:{
    backgroundColor:COLORS.WHITE,
    marginTop:12,
    fontSize:16,
    padding:12,
    borderRadius:18,
  },
  subHeading:{
    fontSize:20,
    fontWeight:'600',
    color:COLORS.TEXT,
  }
});