import axios from 'axios';

const api = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    params : {
        api_key : "fc8d40daab92fcf34ecee1e3299f2c61",
        language : "en-US"
    }
})

export const moviesApi = {
    nowPlaying : () => api.get("movie/now_playing"),
    upComing : () => api.get("movie/upcoming"),
    popular : () => api.get("movie/popular"),
    movieSearch : () => api.get('search/movie'), 
    movieDetail : (id) => api.get(`movie/${id}`),
}

export const tvApi = {
    popular : () => api.get("tv/popular"),
    topRated : () => api.get("tv/top_rated"),
    airingToday : () => api.get("tv/airing_today"),
    tvSearch : () => api.get('search/tv'),
    tvDetail : (id) => api.get(`tv/${id}`),
}