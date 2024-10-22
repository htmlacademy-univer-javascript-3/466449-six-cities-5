import { Navigate } from 'react-router-dom';

interface AuthorizationProps {
  children: React.JSX.Element;
  isAuthorized: boolean;
}

export function Authorization({children, isAuthorized}: AuthorizationProps): React.JSX.Element {
  return isAuthorized ? children : <Navigate to="/login" />;
}
