import axios from "axios";

const KEY = '3aee21951118aea271842c595cb04969';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

export async function fetchPopularMovies() {
    try {
        const response = await axios.get(`${BASE_URL}/popular?api_key=${KEY}&language=en-US&page=1`);
        return response.data;
    } catch (error) {console.log(error)}
}

export async function fetchMovieDetails(movieId) {
    try {
        const response = await axios.get(`${BASE_URL}/${movieId}?api_key=${KEY}&language=en-US&page=1`);
        return response.data;
    } catch (error) {console.log(error)}
}

export async function fetchMovieCredits(movieId) {
    try {
        const response = await axios.get(`${BASE_URL}/${movieId}/credits?api_key=${KEY}&language=en-US&page=1`);
        return response.data;
    } catch (error) {console.log(error)}
}

export async function fetchMovieReviews(movieId) {
    try {
        const response = await axios.get(`${BASE_URL}/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`);
        return response.data;
    } catch (error) {console.log(error)}
}

export async function fetchSearchFilm(searchFilm) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=1&query=${searchFilm}`);
        return response.data;
    } catch (error) {console.log(error)}
}


