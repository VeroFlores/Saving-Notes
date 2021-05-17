// solo describe la iformacion y pasar un objeto que tendremos dentro del reducer
// eslint-disable-next-line no-multi-assign
export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});
export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});
export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});
