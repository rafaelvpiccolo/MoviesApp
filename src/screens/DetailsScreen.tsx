import { View, Text, SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Movies } from '../api';
import Preloader from '../components/Preloader';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import MovieBackDrop from '../components/MovieDetails/MovieBackDrop';
import MovieGenres from '../components/MovieDetails/MovieGenres';
import MovieCast from '../components/MovieDetails/MovieCast';
import BackIcon from '../components/BackIcon/BackIcon';

export type movieDetails = {
  movieDetails: { backDrop: string, title: string}
}

const DetailScreen = () => {
  const route: any = useRoute();
  const { id, navigation } = route.params;
  const [loading, setLoading] = useState(false);
  const [backDrop, setBackDrop] = useState([]);
  const [title, setTitle] = useState([]);
  const [rating, setRating] = useState([]);
  const [genres, setGenres] = useState([]);
  const [overview, setOverview] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const movieDetails = await Movies.GetMovieDetails(id);
      const movieCast = await Movies.GetMovieCast(id);
      setCast(movieCast.cast)
      setBackDrop(movieDetails.backdrop_path);
      setTitle(movieDetails.title)
      setRating(movieDetails.vote_average.toFixed(1))
      setGenres(movieDetails.genres)
      setOverview(movieDetails.overview)
      console.log(navigation)
      setLoading(false);
    }
    fetchData();
  }, [])
  
  if(loading) {
    return (
      <SafeAreaView style={styles.loading}>
        <Preloader/>
      </SafeAreaView>
    )
  }
  else {
    const rat = rating + "/10"
    return (
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <ScrollView style={styles.scrollview} contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
          <StatusBar translucent backgroundColor={"transparent"} />
          <MovieBackDrop backDropPath={backDrop}>
              <Text style={{ fontSize: 24, color: colors.white }}>{title}</Text>
              <View style={{ flexDirection: 'row'}}>
                <Icon name="star" size={16} color="#FFEE00"/> 
                <Text style={{ fontSize: 16, marginBottom: 10, marginLeft: 10, color: colors.white }}>{rat}</Text>
              </View>
          </MovieBackDrop>
          <View style={styles.movieDetailWrapper}>
            <View style={styles.movieDetail}>
              <View>
                <MovieGenres genre={genres} />
                  <View>
                  <Text style={styles.titleText}>Sinopse</Text>
                  <Text>
                    {overview}
                  </Text>
                  <MovieCast credit={cast}/>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <BackIcon navigation={navigation} style={{ marginLeft: 5, position: "absolute", top: 40 }} color={colors.white} />
      </View>
    );
  }
};

export default DetailScreen;

const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6,
    marginTop: 24,
  },
  loading: {
    flex: 1,
    backgroundColor: colors.freeze,
		alignItems: 'center',
		justifyContent: 'center'
  },
  scrollview: {
    backgroundColor: colors.white,
    flexGrow: 1,
  },
  movieDetailWrapper: {
    flex: 1,
    backgroundColor: colors.black,
  },
  movieDetail: {
    flex: 1,
    padding: 16,
    paddingTop: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: colors.white,
  },
})