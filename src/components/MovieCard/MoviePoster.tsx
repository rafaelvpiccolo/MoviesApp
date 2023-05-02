import { View, Image, StyleSheet, TouchableWithoutFeedback, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');
const w = (percent) => width * percent / 100;
const h = (percent) => height * percent / 100;

const MoviePoster = ({ item, navigation, movieId }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {navigation.navigate("Details", {id: movieId, navigation: navigation})}}
      >
        <View style={styles.imageContainer}>
          <Image style={{ height: h(30), width: w(35) }} resizeMode="cover" source={{uri: item}} />
        </View>
      </TouchableWithoutFeedback>
    );
  };
  
  export default MoviePoster;

  const styles = StyleSheet.create({
    imageContainer: {
      margin: 4,
      backgroundColor: 'gray',
      borderRadius: 12,
      overflow: "hidden",
    },
  });