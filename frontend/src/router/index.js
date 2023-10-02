import Auth from '../pages/Auth/Auth';
import Customers from '../pages/Customer/Customers';
import Orders from '../pages/Orders';
import WorkType from '../pages/WorkType';
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  ORDERS_ROUTE,
  CUSTOMERS_ROUTE,
  WORKTYPE_ROUTE,
} from '../utils/consts';

export const authRoutes = [
    { path: ORDERS_ROUTE, component: <Orders /> },
    { path: CUSTOMERS_ROUTE, component: <Customers /> },
    { path: WORKTYPE_ROUTE, component: <WorkType /> },
];

export const publicRoutes = [
  { path: LOGIN_ROUTE, component: <Auth /> },
  { path: REGISTRATION_ROUTE, component: <Auth /> },
];
