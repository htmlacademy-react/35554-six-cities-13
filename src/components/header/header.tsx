import {memo} from 'react';
import NavigationMemo from '../navigation/navigation';
import LogoMemo from '../logo/logo';

type HeaderProps = {
  isNavigation?: boolean;
};

function Header({isNavigation}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <LogoMemo />
          </div>
          {isNavigation && <NavigationMemo />}
        </div>
      </div>
    </header>
  );
}

const HeaderMemo = memo(Header);

export default HeaderMemo;
