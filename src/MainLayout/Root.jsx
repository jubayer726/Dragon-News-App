import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from './HomeLayout';
import Home from '../Page/Home';
import CategoryNews from '../Page/CategoryNews';

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
        hydrateFallbackElement: <span className="loading loading-spinner loading-xl"></span>
      }
    ]
  },
  {
    path: "/auth",
    element: <div>this is authorigation</div>,
  },
  {
    path: "/news",
    element: <div>this is news section</div>,
  },
  {
    path: "/*",
    element: <div>404 page not found</div>,
  },
]);


export default Root;