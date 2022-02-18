import React from 'react';

const Header = () => {
    return (
        <div className='header'>
          <div className='container'>
            <div className='header__sections'>
              <div className='header__section header__section--left'>
                <div className='header__nav'>
                  <ul className='header__menu list'>
                    <li className='list__item'>
                      <a href className='header__link'> Inicio </a>
                    </li>
                    <li className='list__item'>
                      <a href className='header__link'> Series </a>
                    </li>
                    <li className='list__item'>
                      <a href className='header__link'> Peliculas </a>
                    </li>
                    <li className='list__item'>
                      <a href className='header__link'> Novedades Populares </a>
                    </li>
                    <li className='list__item'>
                      <a href className='header__link'> Mi lista </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='header__section header__section--rigth'>

              </div>
            </div>
          </div>
        </div>
    );
}

export default Header;
