// solo describe la iformacion y pasar un objeto que tendremos dentro del reducer
// eslint-disable-next-line no-multi-assign
const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export default setFavorite;
