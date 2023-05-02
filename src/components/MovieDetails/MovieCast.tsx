import React from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";
import colors from "../../styles/colors";


const MovieCast = ({ credit }) => {
  let cast = credit.sort((a, b) => (a.order > b.order ? 1 : -1));
  cast = cast.slice(0, 10);

  if (cast.length === 0) return null;

  return (
    <View>
      <Text style={styles.titleText}>Elenco</Text>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={cast}
        renderItem={({ item }) => Cast(item)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const Cast = (cast) => {
  const imageUrl = "https://image.tmdb.org/t/p/original" + cast.profile_path
  return (
    <View>
      <View style={styles.castImageContainer}>
        <Image source={{uri: imageUrl}} style={styles.castImage} resizeMode={"cover"} />
      </View>
      <Text style={styles.bottomText} numberOfLines={2}>
        {cast.name}
      </Text>
    </View>
  );
};

export default MovieCast;

export const styles = StyleSheet.create({
    titleText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 4,
        marginTop: 24,
        },
    castImageContainer: {
        overflow: "hidden",
        height: 85,
        width: 75,
        borderRadius: 10,
        marginRight: 8,
        backgroundColor: colors.gray,
    },
    castImage: {
        width: 75,
        height: 110,
    },
    bottomText: {
        width: 75,
        fontSize: 14,
        marginTop: 4,
    },
});