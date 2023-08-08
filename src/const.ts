export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';
export const TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const DEFAULT_CITY = CITIES[0];

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Other = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const SortingOffers = {
  Popular: 'Popular',
  PriseLowHigh: 'Price: low to high',
  PriceHighLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first',
} as const;

export enum APIRoute {
  Offers = '/offers',
  Offer = '/offers/offerId',
  OffersNearby = '/offers/offerId/nearby',
  Favorites = '/favorite',
  Comments = '/comments/offersId',
  Login = '/login',
  Logout = '/logout',
}

export {CITIES};
