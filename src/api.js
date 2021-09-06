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
    movieDetail : (id) => api.get(`movie/${id}`, {
        params : {
            append_to_response : "videos"
        }
    }
    ),
    movieSearch : (term) => {
        return api.get('search/movie', {
            params : {
                query : encodeURIComponent(term) 
            }
        })
    }
}

export const tvApi = {
    popular : () => api.get("tv/popular"),
    topRated : () => api.get("tv/top_rated"),
    airingToday : () => api.get("tv/airing_today"),
    tvDetail : (id) => api.get(`tv/${id}`, {
        params : {
            append_to_response : "videos"
        }
    }
    ),
    tvSearch : (term) => {
        api.get('search/tv', {
            params : {
                query : encodeURIComponent(term) 
            }
        })
    }
}