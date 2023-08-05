import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import FiturUtamaSub from "./FiturUtamaSub";


const styles = StyleSheet.create({
    wrapperFiturUtama: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
      flexWrap: 'wrap',
      width: '100%'
    }
})

const FiturUtama = () => {
    return (
        <View style={styles.wrapperFiturUtama}>
          <FiturUtamaSub image={require('../assets/icon/food.jpg')} title="Food" ></FiturUtamaSub>
          <FiturUtamaSub image={require('../assets/icon/bike.jpg')} title="Bike" ></FiturUtamaSub>
          <FiturUtamaSub image={require('../assets/icon/car.jpg')} title="Car" ></FiturUtamaSub>
          <FiturUtamaSub image={require('../assets/icon/send.jpg')} title="Delivery" ></FiturUtamaSub>
          <FiturUtamaSub image={require('../assets/icon/subscribe.jpg')} title="Subscription" ></FiturUtamaSub>
          <FiturUtamaSub image={require('../assets/icon/doctor.jpg')} title="Doctor" ></FiturUtamaSub>
          <FiturUtamaSub image={require('../assets/icon/pulsa.jpg')} title="Pulsa/Token" ></FiturUtamaSub>
          <FiturUtamaSub image={require('../assets/icon/more.jpg')} title="More" ></FiturUtamaSub>
        </View>
    )
}

export default FiturUtama