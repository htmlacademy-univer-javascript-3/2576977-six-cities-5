import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { offers } from './mocks/offers';
import { route } from './constants/route';
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import { Favorites } from './pages/Favorites';
import { Offer } from './pages/Offer';
import { NotFound } from './pages/NotFound';

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
        <Route path={route.offer()} element={<Offer offers={offers} />} />
        <Route path={route.other} element={<NotFound />} />
      </ Routes>
    </BrowserRouter>
  </React.StrictMode>
);
