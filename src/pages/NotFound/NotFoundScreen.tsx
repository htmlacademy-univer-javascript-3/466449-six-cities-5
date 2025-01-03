import React from 'react';
import { Layout } from '../../components/layout.tsx';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../props/Constants';
import styles from './NotFound.module.css';

export function NotFoundScreen(): React.JSX.Element {
  return (
    <Layout>
      <main className={styles.main__not_found}>
        <h1>404 Not Found</h1>
        <Link className='button form__submit' to={AppRoutes.MainScreen}>Go to main page</Link>
      </main>
    </Layout>
  );
}
