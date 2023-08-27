import {AppRoute, AuthorizationStatus} from '../../const';
import {Fragment, memo, useEffect, useMemo} from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFavorites, logoutAction} from '../../store/api-actions';
import {getAuthorizationStatus, getCurrentUser} from '../../store/user-process/selectors';
import {getFavoriteOffers} from '../../store/data-process/selectors';

function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(useMemo(() => getAuthorizationStatus, []));
  const currentUser = useAppSelector(useMemo(() => getCurrentUser, []));
  const favorites = useAppSelector(getFavoriteOffers);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavorites());
    }
  }, [dispatch, authorizationStatus]);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth
          ? (
            <Fragment>
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{currentUser?.email}</span>
                  <span className="header__favorite-count">{favorites.length}</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  className="header__nav-link"
                  to={AppRoute.Root}
                  onClick={(evt) =>{
                    evt.preventDefault();
                    dispatch(logoutAction());
                  }}
                >
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>
            </Fragment>
          )
          : (
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__login">Sign in</span>
              </Link>
            </li>
          )}
      </ul>
    </nav>
  );
}

const NavigationMemo = memo(Navigation);

export default NavigationMemo;
