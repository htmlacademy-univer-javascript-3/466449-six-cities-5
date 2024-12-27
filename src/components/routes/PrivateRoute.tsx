import { Navigate, Outlet } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../props/Constants';
import { useAppSelector } from '../../store/Hooks';

export default function PrivateRoute() {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  return authStatus === AuthorizationStatus.Auth ? (
    <Outlet />
  ) : (
    <Navigate to={AppRoutes.Login} />
  );
}