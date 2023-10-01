import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { CUSTOMERS_ROUTE } from '../utils/consts';
import { authRoutes, publicRoutes } from '../router/index.js';
const AppRouter = () => {
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(route => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      {publicRoutes.map(route => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
      <Route path='*' element={<Navigate replace to={CUSTOMERS_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
