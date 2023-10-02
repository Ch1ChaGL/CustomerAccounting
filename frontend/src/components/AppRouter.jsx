import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { CUSTOMERS_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { authRoutes, publicRoutes } from '../router/index.js';
import { Context } from '..';
const AppRouter = () => {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <Routes>
      {user.isAuth ||
        (true &&
          authRoutes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          )))}
      {publicRoutes.map(route => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
      <Route path='*' element={<Navigate replace to={LOGIN_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
