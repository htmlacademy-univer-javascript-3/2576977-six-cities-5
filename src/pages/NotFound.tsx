import { FC } from 'react';
import { Link } from 'react-router-dom';
import { route } from '../constants/route';

export const NotFound: FC = () => (
  <div className="page page--gray page--main">
    <h1>404 error: page not found</h1>
    <Link to={route.main}>to main</Link>
  </div>
);
