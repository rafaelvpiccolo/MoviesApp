import { StyleSheet, View, Text, Pressable, FlatList, SafeAreaView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../styles/colors';
import { Movies } from '../api';
import MovieCard from '../components/MovieCard';
import Preloader from '../components/Preloader'

export type RootStackParamList = {
    Details: { id: number, navigation: StackNavigationProp<RootStackParamList>} | undefined;
    Search: { navigation: StackNavigationProp<RootStackParamList>}
  };

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    fetchMovies();
  }, [])

  async function fetchMovies() {
    setLoading(true);
    const movies = await Movies.GetPopular();
    for (const movie of movies.results) {
      const movieDetails = await Movies.GetMovieDetails(movie.id)
      movie.genres = movieDetails.genres
    }
    setMovieList(movies.results);
    setLoading(false);
  }

  async function onReachEnd() {
    if(!fetching) {
      setFetching(true)
      const newPage = page + 1;
      const currentMovies = movieList;
      const movies = await Movies.GetPopular(newPage);
      for (const movie of movies.results) {
        const movieDetails = await Movies.GetMovieDetails(movie.id)
        movie.genres = movieDetails.genres
      }
      const newMovies = currentMovies.concat(movies.results)
      setPage(newPage)
      setMovieList(newMovies);
      setFetching(false)
    }
  };

  const renderMovieList = ({item}) => (
    <MovieCard movies={item} navigation={navigation} />
  );

  if(loading) {
    return (
      <SafeAreaView style={styles.loading}>
        <Preloader/>
      </SafeAreaView>
    )
  }
  else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor={"transparent"} />
        <View style={{ margin: 16, flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.screenTitle}>Filmes</Text>
          </View>
          <TouchableWithoutFeedback onPress={() => {navigation.navigate("Search", {navigation: navigation})}} >
            <Icon name={"search"} size={20} />
          </TouchableWithoutFeedback>
        </View>
        <FlatList
          data={movieList}
          showsVerticalScrollIndicator={false}
          renderItem={renderMovieList}
          keyExtractor={item => item.id}
          initialNumToRender={8}
          keyboardShouldPersistTaps={"handled"}
          onEndReached={onReachEnd}
          onEndReachedThreshold={0.9}
          contentContainerStyle={{ marginVertical: 8 }}
        />
      </SafeAreaView>
    );
  }
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    backgroundColor: colors.freeze,
		alignItems: 'center',
		justifyContent: 'center'
  },
  screenTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 0,
    alignSelf: 'center'
  },

  searchIcon: {
    flex: 1
  }
});