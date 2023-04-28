import axios from 'axios';
const baseUrl = "https://api.themoviedb.org/3"
const privateToken = "abdf5c7e22416456d9d237e65cb9c0ff"

const exceptionsHttp = [ 204, 401, 400, 404, 406, 417 ];

export const API = {
    Movies() {
        return axios.create({
            validateStatus: (status) => exceptionsHttp.indexOf(status) < 0,
			baseURL: baseUrl,
			timeout: 120000,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
        })
    }
}

export const Movies = {
    async GetPopular() {
        return await API.Movies().get(
            "/movie/popular?language=pt-BR", 
            {
                headers: { Authorization: privateToken}
            }
        ).then((response) => response.data)
        .catch((err) => console.error(err))
    },
}