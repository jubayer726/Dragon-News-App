import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from './HomeLayout';
import Home from '../Page/Home';
import CategoryNews from '../Page/CategoryNews';
import Login from '../Page/Login';
import Register from '../Page/Register';
import Auth from './Auth';
import NewsDetails from '../Page/NewsDetails';
import PrivateRoute from '../Provider/PrivateRoute';
import Loading from '../Page/Loading';

const Root = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <h1>404 page not found</h1>,
    children: [
      {
        path: '/',
        Component: Home
      },
      {
        path: 'category/:id',
        Component: CategoryNews,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <Loading></Loading>
      }
    ]
  },
  {
    path: "/auth",
    element: <Auth></Auth>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: "/news-details/:id",
    element: <PrivateRoute>
      <NewsDetails></NewsDetails>
    </PrivateRoute>,
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>
  },
  {
    path: "/*",
    element: <div>404 page not found</div>,
  },
]);


export default Root;