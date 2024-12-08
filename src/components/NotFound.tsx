import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../props/Constants';

export function NotFound(): React.JSX.Element {
  return (
    <Fragment>
      <h1>404 Not Found</h1>
      <Link to={AppRoutes.MainScreen}>Go to main page</Link>
    </Fragment>
  );
}
