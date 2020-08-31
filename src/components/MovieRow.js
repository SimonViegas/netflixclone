import React from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import './MovieRow.css';

export default ({title, items}) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left">
        <NavigateBeforeIcon style={{fontSite: 50}} />
      </div>
      <div className="movieRow--rigth">
        <NavigateNextIcon style={{fontSite: 50}} />
      </div>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
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
 