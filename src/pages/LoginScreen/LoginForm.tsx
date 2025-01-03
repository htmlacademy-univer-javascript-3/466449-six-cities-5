﻿import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../props/Constants';
import { AuthData } from '../../props/AuthData';
import { loginAction } from '../../store/ApiActions';
import { useAppDispatch } from '../../store/Hooks';

export function LoginForm() {
  const [formData, setFormData] = useState<AuthData>({
    login: '',
    password: '',
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginAction(formData));
    navigate(AppRoutes.MainScreen);
  };

  return (
    <form className="login__form form" onSubmit={login}>
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
      >
        Sign in
      </button>
    </form>
  );
}
