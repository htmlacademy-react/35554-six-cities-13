import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import {AuthorizationStatus} from '../../const';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <Navigation authorizationStatus={AuthorizationStatus.NoAuth} />
        </div>
      </div>
    </header>
  );
}

export default Header;
