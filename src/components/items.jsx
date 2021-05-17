import React from 'react';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions/index';
import '../assets/styles/components/Item.scss';
import play from '../assets/static/play-icon.png';
import plus from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/delete-icon.png';

const Item = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;

  const handleSetFavorite = () => {
    console.log(props);
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img
            className='carousel-item__details--img'
            src={play}
            alt='Play Icon'
          />
          {!isList ? (
            <img
              className='carousel-item__details--img'
              src={plus}
              alt='Plus Icon'
              onClick={handleSetFavorite}
            />
          ) : (
            ''
          )}

          {isList ? (
            <img
              className='carousel-item__details--img'
              src={removeIcon}
              alt='delete Icon'
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            ''
          )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};
console.log(mapDispatchToProps);
export default connect(null, mapDispatchToProps)(Item);
