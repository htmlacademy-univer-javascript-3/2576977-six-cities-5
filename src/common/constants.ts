export const route = {
  main: '/',
  login: '/login',
  favorites: '/favorites',
  offer: (id: string = 'id') => `/offer/:${id}`,
  other: '*'
};
