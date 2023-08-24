import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import {memo} from 'react';

type HeaderProps = {
  isNavigation?: boolean;
};

function Header({isNavigation}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {isNavigation && <Navigation />}
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
