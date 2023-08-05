import MainPage from '../../pages/main-page/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import {FullOffers, Offers} from '../../types/offer';
import {TReviews} from '../../types/reviews';

type AppPageProps = {
  offers: Offers;
  fullOffers: FullOffers;
  reviews: TReviews;
}

function App({offers, fullOffers, reviews}: AppPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesScreen offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer}
          element={<OfferScreen offers={offers} fullOffers={fullOffers} reviews={reviews} />}
        />
        <Route path={AppRoute.Other} element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
