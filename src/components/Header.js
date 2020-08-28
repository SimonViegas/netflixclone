import React from 'react';
import './Header.css';

export default ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Logo Netflix"/>
        </a>
      </div>
      <div className="header--user">
          <a href="/YourUser"></a>
          <img src="https://occ-0-1836-1380.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABe0HfBYCaNApCD7Wy6nM9X7PlyeLdqSbDOWSaZIKbhaGQm8jaWLm-5ow8XaTavQgorvuNbp7By0-EtnUF0uY-Rc.png?r=a30" alt="Logo Usuário"/>
      </div>
    </header>
  )
}
