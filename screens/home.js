import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React from "react";
import ScreenWrapper from "../components/common/screen-wrapper";
import { COLORS } from "../theme/theme";
import { IMAGES, RANDOM_THUMBNAIL } from "../assets/assets";
import EmptyList from "../components/home/empty-list";
import { useSelector } from "react-redux";



const Home = ({ navigation }) => {
  const tripList=useSelector(state=>state.trips.trips);
  return (
    <ScreenWrapper>
      <View>
        <View style={styles.homeHeader}>
          <Text style={styles.heading}>Trivy</Text>
        </View>
        <View style={styles.bannerConatiner}>
          <Image source={IMAGES.TRIVY_BANNER} style={styles.bannerImage} />
          <TouchableOpacity >
            <View style={styles.addTripButton}>
              <Text style={styles.addTripButtonText} onPress={()=>navigation.navigate('Add Trip')}>Add Trip</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subHeading}>Recent Trips</Text>
      <View style={styles.listWrapper}>
        <FlatList
          data={tripList}
          keyExtractor={item=>item.id}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.tripsList}
          numColumns={2}
          ListEmptyComponent={<EmptyList/>}
          
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>navigation.navigate("Trip Expenses",item)}>
              <View style={styles.tripCard}>
                <Image source={item.banner} style={styles.tripBanner} />
                <Text style={styles.place}>{item.place}</Text>
                <Text style={styles.country}>{item.country}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: "600",
    color: COLORS.TEXT,
  },
  bannerConatiner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  bannerImage: {
    width: "180%",
    height: 300,
    resizeMode: "contain",
  },
  addTripButtonText: {
    fontWeight: "700",
    color: COLORS.TEXT,
  },
  addTripButton: {
    backgroundColor: COLORS.WHITE,
    position: "absolute",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 14,
    bottom: 25,
    left: 50,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.TEXT,
  },
  tripBanner:{
    height:140,
    width:140,
  },
  listWrapper:{
    marginTop:25,
    marginBottom:120,
    height:420,
  },
  tripsList:{
    justifyContent:'space-between',
  },
  tripCard:{
    backgroundColor:COLORS.WHITE,
    marginBottom:12,
    borderRadius:14,
    padding:8,
  },
  place:{
    fontSize:14,
    fontWeight:'600',
    marginLeft:6,
  },
  country:{
    fontSize:10,
    fontWeight:'600',
    marginLeft:6,
  },
});
