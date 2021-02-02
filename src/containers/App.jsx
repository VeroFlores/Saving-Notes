/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Header from '../components/Header';
import Searcher from '../components/Searcher';
import Categories from '../components/categories';
import Carousel from '../components/Carousel';
import Item from '../components/items';
import Footer from '../components/Footer';
import useTvShowApi from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/InitialState';

const App = () => {
  const initialState = useTvShowApi(API);
  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <div className='app'>
      <Header />
      <Searcher />
      {initialState.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            <Item />
          </Carousel>
        </Categories>
      )}

      <Categories title='Lista de Reproducción'>
        <Carousel>
          {
            initialState.trends.map((item) => <Item key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>
      <Categories title=' Recomendados'>
        <Carousel>
          {
            initialState.originals.map((item) => <Item key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>
      <Footer />

    </div>

  );
};
export default App;
