import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../..';
import { logout } from '../../../API/userAPI';
import { observer } from 'mobx-react-lite';
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  CUSTOMERS_ROUTE,
  ORDERS_ROUTE,
  WORKTYPE_ROUTE,
} from '../../../utils/consts';
import s from './Navbar.module.css';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const logautClick = () => {
    logout();
    user.setIsAuth(false);
    user.setUser({});
    navigate('/login');
  };
  return (
    <nav className={s.row}>
      <CustomLink to={CUSTOMERS_ROUTE}>Клиенты</CustomLink>
      <CustomLink to={ORDERS_ROUTE}>Заказы</CustomLink>
      <CustomLink to={WORKTYPE_ROUTE}>Виды работ</CustomLink>

      {user.isAuth ? (
        <button className={s.logout} onClick={logautClick}>
          Выход
        </button>
      ) : (
        <button className={s.login} onClick={() => navigate(LOGIN_ROUTE)}>
          Авторизация
        </button>
      )}
    </nav>
  );
});

export default Navbar;
