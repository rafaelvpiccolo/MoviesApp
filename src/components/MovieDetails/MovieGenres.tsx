import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../styles/colors";

const MovieGenres = ({ genre }) => {
    let component = genre.map((item, index) => {
      return (
        <View key={index} style={styles.view}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      );
    });
    return <View style={styles.container}>{component}</View>;
};

export default MovieGenres;

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      width: "70%",
    },
  
    view: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderWidth: 0.75,
      borderColor: colors.darkBlue,
      borderRadius: 4,
      marginRight: 4,
      marginBottom: 4,
    },
  
    text: {
      color: colors.darkBlue,
      fontSize: 15,
    },
  });