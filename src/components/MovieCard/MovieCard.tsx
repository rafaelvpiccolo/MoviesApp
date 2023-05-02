import {Text, Image, TouchableWithoutFeedback, View} from 'react-native';
import styles from './MovieCard.styles';
import MoviePoster from './MoviePoster';
import Icon from 'react-native-vector-icons/FontAwesome';

const basePosterPath = "https://image.tmdb.org/t/p/original"

const MovieCard = ({movies, navigation}) => {
    const poster = basePosterPath + movies.poster_path
    const rating = movies.vote_average + "/10"
    return (
        <View style={{ marginHorizontal: 16, marginVertical: 8 }}>
        <TouchableWithoutFeedback
          onPress={() => {navigation.navigate("Details", {id: movies.id, navigation: navigation})}}
        >
          <View style={{ flexDirection: "row" }}>
            <MoviePoster item={poster} navigation={navigation} movieId={movies.id} />
            <View style={{ margin: 16, justifyContent: "center", marginBottom: 24, flex: 1 }}>
              <Text style={{ fontSize: 16, marginBottom: 10 }}>
                {movies.title}
              </Text>
              <View style={{ flexDirection: 'row'}}>
                <Icon name="star" size={16} color="#FFEE00"/> 
                <Text style={{ fontSize: 16, marginBottom: 10, marginLeft: 10 }}>
                    {rating}
                </Text>
              </View> 
              {movies.genres.map((genre, i) => {
                return (
                    <View key={i}>
                    <Text style={{ fontSize: 12, marginTop: 10, width: "75%" }}>{genre.name}</Text>
                    </View>
                );
                })}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
}

export default MovieCard