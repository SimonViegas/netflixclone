import Keys from "./keys";

//const API_KEY = 'xxxxxxxxxxxxxxxx'; //aqui tua chave da API (v3 auth) https://www.themoviedb.org/settings/api
const API_KEY = Keys.MyKey(); //use a linha acima com a tua chave
const API_BASE = 'https://api.themoviedb.org/3';
const LANGUAGE = 'pt-BR' //en

/*
- originais da Netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comédia
- romance
- documentários
*/

const basicFecth = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();

  //console.log(json);
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFecth(`/discover/tv?with_network=213&language=${LANGUAGE}&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFecth(`/trending/all/week?language=${LANGUAGE}&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await basicFecth(`/movie/top_rated?language=${LANGUAGE}&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFecth(`/discover/movie?with_genres=28&language=${LANGUAGE}&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFecth(`/discover/movie?with_genres=35&language=${LANGUAGE}&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFecth(`/discover/movie?with_genres=27&language=${LANGUAGE}&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFecth(`/discover/movie?with_genres=10749&language=${LANGUAGE}&api_key=${API_KEY}`)
      },
      {
        slug: 'Documentary',
        title: 'Documentários',
        items: await basicFecth(`/discover/movie?with_genres=99&language=${LANGUAGE}&api_key=${API_KEY}`)
      }
    ]
  },

  getMovieInfo: async (movieId, type) => {
    let info = {}
    
    if (movieId) {
      switch(type) {
        case 'movie':
          info = await basicFecth(`/movie/${movieId}?language=${LANGUAGE}&api_key=${API_KEY}`);
          break;
        case 'tv':
          info = await basicFecth(`/tv/${movieId}?language=${LANGUAGE}&api_key=${API_KEY}`);
          break;
        default:
          info = null;
          break;
      }
    }

    return info;
  }
}
