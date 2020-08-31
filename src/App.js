import React, { useEffect, useState } from 'react';
import Tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header';
import './App.css'

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setfeatureData] = useState(null);
  const [blackHeader, setblackHeader] = useState(false);


  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
            
      setMovieList(list);

      // Pegando o Featred
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setfeatureData(chosenInfo);
    }

  loadAll(); 
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10)
        setblackHeader(true);
      else
        setblackHeader(false);
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  })

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featureData && <FeatureMovie item={featureData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        Feito com <span role="img" aria-label="Coração">S2</span><br />
        Direitos de imagem para Netflix<br />
        Dados pegos do site Themoviedb.org
      </footer>
      
      {movieList <=0 &&
        <div className="loading">
          <img src="https://www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/netflix-loading.gif?x91507" alt="Carregando"/>
        </div>
      }

    </div>
  )
}
