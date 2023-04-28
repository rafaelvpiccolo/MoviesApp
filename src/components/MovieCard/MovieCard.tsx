import {Text, Image, TouchableWithoutFeedback, View} from 'react-native';
import styles from './MovieCard.styles';

const MovieCard = ({movies, onSelect}) => {
    return (
    <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: movies.image}} />
            <View style={styles.inner_container}>
            <Text style={styles.name}>{movies.name}</Text>
            {/* <View style={styles.genre_container}>
                {genre.map((genre, i) => {
                return (
                    <View key={i}>
                    <Text style={styles.genre}>{genre}</Text>
                    </View>
                );
                })}
            </View> */}
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

export default MovieCard