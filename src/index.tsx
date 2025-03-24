import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './components/Main';
import { route } from './common/constants';
import { Login } from './components/Login';
import { Favorites } from './components/Favorites';
import { Offer } from './components/Offer';
import { NotFound } from './components/NotFound';
import { PrivateRoute } from './components/PrivateRoute';
import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={route.main} element={<Main offers={offers} />} />
        <Route path={route.login} element={<Login />} />
        <Route path={route.favorites} element={
          <PrivateRoute status="auth">
            <Favorites offers={offers.filter((el) => el.isFavorite)} />
          </PrivateRoute>
        }
        />
        <Route path={route.offer()} element={<Offer />} />
        <Route path={route.other} element={<NotFound />} />
      </ Routes>
    </BrowserRouter>
  </React.StrictMode>
);
