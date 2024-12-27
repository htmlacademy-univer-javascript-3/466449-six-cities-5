import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../props/Constants';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import { AuthData } from '../../props/AuthData';
import { loginAction } from '../../store/ApiActions';

export function LoginScreen(): React.JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const [formData, setFormData] = useState<AuthData>({
    login: '',
    password: '',
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoutes.MainScreen);
    }
  }, [authStatus, navigate]);


  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const login = () => {
    dispatch(loginAction(formData));
    navigate(AppRoutes.MainScreen);
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoutes.MainScreen}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input 
                  className="login__input form__input" 
                  type="email" 
                  name="login" 
                  placeholder="Email" 
                  onChange={handleFormChange}
                  value={formData.login}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input 
                  className="login__input form__input" 
                  type="password" 
                  name="password" 
                  placeholder="Password" 
                  onChange={handleFormChange}
                  value={formData.password}
                  required
                />
              </div>
              <button 
                className="login__submit form__submit button" 
                type="submit"
                onClick={login}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
