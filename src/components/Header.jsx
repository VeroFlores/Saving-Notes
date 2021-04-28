import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-bw.png';
import icon from '../assets/static/user-icon.png';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={icon} alt='icon' />
          <p>Perfil</p>
        </div>
        <ul>
          <Link to='/login'>Iniciar Sesión</Link>
        </ul>
      </div>
    </header>
  );
};
export default Header;
