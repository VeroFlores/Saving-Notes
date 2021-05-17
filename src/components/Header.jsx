import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-bw.png';
import icon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user } = props;
  console.log(props);
  const hasUser = Object.keys(user).length > 0;
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ? <img src={gravatar(user.email)} alt={user.email} /> : <img src={icon} alt='icon' />}

          <p>Perfil</p>
        </div>
        <ul>
          <Link to='/login'>Iniciar Sesión</Link>
        </ul>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(null, mapStateToProps)(Header);
