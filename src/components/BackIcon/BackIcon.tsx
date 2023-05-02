import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../styles/colors";

const BackIcon = ({ style, navigation, color }) => {
    return (
      <View style={style}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Icon name={"md-chevron-back"} size={32} color={color} />
        </TouchableWithoutFeedback>
      </View>
    );
  };
  
  export default BackIcon;