import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView } from 'react-native';
import BackIcon from '../components/BackIcon/BackIcon';
import colors from '../styles/colors';
import { useRoute } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";
import MovieCard from '../components/MovieCard';
import Preloader from '../components/Preloader/Preloader';
import { Movies } from '../api';

const SearchScreen = () => {
    const route: any = useRoute();
    const { navigation } = route.params;
    const [ movieList, setMovieList ] = useState([])
    const [ loading, setLoading ] = useState(false)

    async function searchMovie(text: string) {
        setLoading(true);
        const movies = await Movies.SearchMovie(text);
        for (const movie of movies.results) {
            const movieDetails = await Movies.GetMovieDetails(movie.id)
            movie.genres = movieDetails.genres
        }
        setMovieList(movies.results)
        setLoading(false)
    }

    const renderMovieList = () => {
        if(loading) {
            return (
                <SafeAreaView style={styles.loading}>
                    <Preloader/>
                </SafeAreaView>
            )
        }
        else {
            return (
                <FlatList
                data={movieList}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <MovieCard movies={item} navigation={navigation} />}
                keyExtractor={item => item.id}
                initialNumToRender={8}
                keyboardShouldPersistTaps={"handled"}
                //onEndReached={onReachEnd}
                //onEndReachedThreshold={0.9}
                contentContainerStyle={{ marginVertical: 8 }}
                />
            )
        }
        
    }
    
    return(
    <View>
        <View style={{ flexDirection: "row", marginTop: 24 }}>
          <BackIcon style={{ flex: 1, paddingLeft: 12, alignSelf: "flex-start" }} navigation={navigation} color={colors.black} />
          <Text style={styles.headerTitle}>{'Pesquisa de Filmes' }</Text>
          <View style={{ flex: 1, paddingRight: 12 }}></View>
        </View>
        <View style={styles.searchContainer}>
        <Icon name={"search"} size={20} style={{ margin: 12 }} />
        <View style={{ alignSelf: "center", flex: 1 }}>
          <TextInput
            style={styles.searchInput}
            placeholder={"Clube da luta"}
            onChangeText={(text) => searchMovie(text)}
            returnKeyType={"search"}
            autoCorrect={false}
          />
        </View>
      </View>
      {renderMovieList()}
    </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    headerTitle: {
      fontSize: 20,
      flex: 8,
      textAlign: "center",
      alignSelf: "center",
    },
  
    searchContainer: {
      marginHorizontal: 16,
      backgroundColor: colors.gray,
      borderRadius: 16,
      flexDirection: "row",
    },
  
    searchInput: {
      fontSize: 14,
      flex: 1,
      marginRight: 12,
      backgroundColor: colors.gray
    },
    loading: {
        alignItems: 'center',
        justifyContent: 'center'
      },
  });