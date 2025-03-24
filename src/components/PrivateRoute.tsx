import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { route } from '../common/constants';

interface PrivateRouteProps {
  status: 'init' | 'auth' | 'notAuth';
  children: JSX.Element;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({status, children}) => status === 'auth' ? children : <Navigate to={route.login}/>;
