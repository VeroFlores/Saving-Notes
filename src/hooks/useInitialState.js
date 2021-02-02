import { useEffect, useState } from 'react';

const useTvShowsApi = (API) => {
  const [tvShows, setTvShows] = useState([]);
  useEffect(() => {
    window
      .fetch(API)
      .then((response) => response.json())
      .then((data) => setTvShows(data));
  }, []);
  return tvShows;
};

export default useTvShowsApi;
