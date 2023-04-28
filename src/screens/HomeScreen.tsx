import { StyleSheet, View, Text, Pressable, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect, useState } from 'react';

import colors from '../styles/colors';
import { Movies } from '../api';
import MovieCard from '../components/MovieCard';

export type RootStackParamList = {
    Details: { name: string, birthYear: string } | undefined;
  };

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    handlePopularMovies();
  }, [movieList])

  const handlePopularMovies = async () => {
    const data = await Movies.GetPopular()
    console.log(data)
    setMovieList(data.results)
  }

  const renderMovieList = ({item}) => (
    <MovieCard movies={item} onSelect={() => {}} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={movieList}
        renderItem={renderMovieList}
        numColumns={2}
        keyExtractor={item => item.id}
        initialNumToRender={8}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});