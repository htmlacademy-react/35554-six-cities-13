import {FormEvent, useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {Link, Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, CITIES} from '../../const';
import {getRandomElement} from '../../utils/offers';
import {changeCity} from '../../store/app-process/app-process';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import HeaderMemo from '../../components/header/header';

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]+$/;

function LoginScreen(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const randomCity = getRandomElement(CITIES);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();

  const [isActiveInput, setIsActiveInput] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (<Navigate to={AppRoute.Root} />);
  }

  const handlePasswordChange = () => {
    setIsActiveInput(true);
    setIsPasswordValid(PASSWORD_REGEX.test(passwordRef.current?.value as string || ''));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  return (
    <div className="page page--gray page--login">
      <HeaderMemo />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="email">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="password">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onInput={handlePasswordChange}
                  required
                />
                {isActiveInput && !isPasswordValid &&
                  <p>Password is incorrect, it must consist of the one letter and a number.</p>}
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={!isPasswordValid}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Root}
                onClick={() => dispatch(changeCity(randomCity))}
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
