import {AuthorizationStatus} from '../../const';
import {Fragment} from 'react';

type NavigationProps = {
  authorizationStatus: AuthorizationStatus;
}

function Navigation({authorizationStatus}: NavigationProps): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth
          ? (
            <Fragment>
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">3</span>
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </Fragment>
          )
          : (
            <li className="header__nav-item user">
              <a className="header__nav-link header__nav-link--profile" href="#">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__login">Sign in</span>
              </a>
            </li>
          )}
      </ul>
    </nav>
  );
}

export default Navigation;
