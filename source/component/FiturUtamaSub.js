import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";


const styles = StyleSheet.create({
    wrapperFiturUtama: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15
    },
    imageFiturUtama: {
      height: 55,
      width: 55,
      marginTop: 15
    },
    textFiturUtama: {
      textAlign: 'center',
      marginTop: 4,
    }
})

// Ini untuk Functional Component
// const FiturUtamaSub = (props) => {
//     return (

//           <View style={{width: '25%', alignItems: 'center'}}>
//             <Image style={styles.imageFiturUtama} source={props.image} />
//             <Text style={styles.textFiturUtama}>{props.title}</Text>
//           </View>
//     )
// }

class FiturUtamaSub extends React.Component {
    render() {
        return (
            <View style={{width: '25%', alignItems: 'center'}}>
            <Image style={styles.imageFiturUtama} source={this.props.image} />
            <Text style={styles.textFiturUtama}>{this.props.title}</Text>
          </View>
        )
    }
}

export default FiturUtamaSub