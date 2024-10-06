import { Navigate } from 'react-router-dom';

interface AuthorizationProps {
  children: React.JSX.Element;
}

export function Authorization({children}: AuthorizationProps): React.JSX.Element {
  const isAuthorized = false;
  return isAuthorized ? children : <Navigate to="/login" />;
}
