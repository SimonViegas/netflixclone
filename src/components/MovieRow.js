import React, { useState } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import './MovieRow.css';

export default ({title, items}) => {
  const [scrolX, setScrolX] = useState(0);

  const handLeftArrow = () => {
    let x = scrolX + Math.round(window.innerWidth);

    if(x > 0) {
      x = 0;
    }

    setScrolX(x);
  };

  const handRightArrow = () => {
    let x = scrolX - Math.round(window.innerWidth);
    let listW = items.results.length * 150;
    
    if(window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    

    setScrolX(x);
  };


  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handLeftArrow}>
        <NavigateBeforeIcon style={{fontSite: 50}} />
      </div>
      <div className="movieRow--rigth" onClick={handRightArrow}>
        <NavigateNextIcon style={{fontSite: 50}} />
      </div>
      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{
          marginLeft: scrolX,
          width: items.results.length * 150
        }} >
          {items.results.length > 0 && items.results.map((item, key) => (            
            <div key={key} className="movieRow--item">
              <img alt={item.original_title || item.name} src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
 