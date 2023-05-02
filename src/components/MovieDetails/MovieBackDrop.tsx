import React from "react";
import PropTypes from "prop-types";
import { Dimensions, View, StyleSheet, Image } from "react-native";
import {LinearGradient} from 'expo-linear-gradient'
import colors from "../../styles/colors";

const baseBackdropPath = "https://image.tmdb.org/t/p/original"

const MovieBackDrop = ({ backDropPath, children }) => {
    const backDrop = baseBackdropPath + backDropPath
    return (
      <View style={styles.container}>
        <Image source={{uri: backDrop}} resizeMode={"cover"} style={styles.imageStyle} />
        <LinearGradient colors={[colors.transparent, colors.black]} locations={[0.45, 0.9]} style={styles.gradientImage} />
        <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, margin: 16, borderTopLeftRadius: 16 }}>
          {children}
        </View>
      </View>
    );
  };
  
  export default MovieBackDrop;

  const styles = StyleSheet.create({
    container: {
      height: Dimensions.get("window").height / 2.5,
      backgroundColor: colors.black,
    },
  
    imageStyle: {
      flex: 1,
      height: Dimensions.get("window").width * 1.7777,
      width: Dimensions.get("window").width,
    },
  
    gradientImage: {
      flex: 1,
      position: "absolute",
      height: "100%",
      width: "100%",
    },
  });