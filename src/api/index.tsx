import axios from 'axios';
const baseUrl = "http://api.themoviedb.org/3"

// Insira seu token aqui:
const privateToken = ""

export const Movies = {
    async gatoTeste() {
        return await axios.get("https://cat-fact.herokuapp.com/facts/random").then((response) => response.data)
    },
    async GetPopular(page = 1) {
        return await axios.get(
            baseUrl +
            "/movie/popular?language=pt-BR&" +
            "page=" + page +
            "&api_key=" + privateToken
        ).then((response) => response.data)
        .catch((err) => console.error(err))
    },
    async GetMovieDetails(id) {
        return await axios.get(
            baseUrl + 
            "/movie/" + id + "?language=pt-BR&" +
            "api_key=" + privateToken
        ).then((response) => response.data)
        .catch((err) => console.error(err))
    },
    async GetMovieCast(id) {
        return await axios.get(
            baseUrl + 
            "/movie/" + id + "/credits?language=pt-BR&" +
            "api_key=" + privateToken
        ).then((response) => response.data)
        .catch((err) => console.error(err))
    },
    async SearchMovie(query) {
        return await axios.get(
            baseUrl +
            "/search/movie?language=pt-BR&" +
            "query=" + query + "&api_key=" +
            privateToken
        ).then((response) => response.data)
        .catch((err) => console.error(err))
    }
}