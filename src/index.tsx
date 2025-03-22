import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './components/Main';
import { ROUTE } from './common/constants';
import { Login } from './components/Login';
import { Favorites } from './components/Favorites';
import { Offer } from './components/Offer';
import { NotFound } from './components/NotFound';
import { PrivateRoute } from './components/PrivateRoute';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.main} element={<Main placesCount={42} />} />
        <Route path={ROUTE.login} element={<Login />} />
        <Route path={ROUTE.favorites} element={<PrivateRoute status={'notAuth'}><Favorites /></PrivateRoute>} />
        <Route path={ROUTE.offer} element={<Offer />} />
        <Route path={ROUTE.other} element={<NotFound />} />
      </ Routes>
    </BrowserRouter>
  </React.StrictMode>
);
