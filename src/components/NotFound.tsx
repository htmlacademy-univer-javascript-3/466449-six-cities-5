import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutesProps } from '../props/AppRoutesProps';

export function NotFound(): React.JSX.Element {
  return (
    <Fragment>
      <h1>404 Not Found</h1>
      <Link to={AppRoutesProps.MainScreen}>Go to main page</Link>
    </Fragment>
  );
}
