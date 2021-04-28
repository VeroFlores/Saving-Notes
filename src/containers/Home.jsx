/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Searcher from '../components/Searcher';
import Categories from '../components/categories';
import Carousel from '../components/Carousel';
import Item from '../components/items';
import '../assets/styles/App.scss';

const Home = ({ mylist, trends, originals }) => {
  console.log(mylist);
  return (
    <div className='app'>
      <Searcher />
      {mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {mylist.map((item) => (
              <Item key={item.id} {...item} />
            ))}

          </Carousel>
        </Categories>
      )}

      <Categories title='Lista de Reproducción'>
        <Carousel>
          {
            trends.map((item) => (
              <Item key={item.id} {...item} />
            ))
          }
        </Carousel>
      </Categories>
      <Categories title=' Recomendados'>
        <Carousel>
          {
            originals.map((item) => <Item key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>
    </div>

  );
};
const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };

};
export default connect(mapStateToProps, null)(Home);
