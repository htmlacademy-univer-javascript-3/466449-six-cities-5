import ReactDOM from 'react-dom/client';
import { App } from './components/App.tsx';
import { offerMocks } from './mocks/offers.ts';
import { ReviewsMock } from './mocks/reviews.ts';
import { store } from './store/Index';
import { fetchOrdersAction, checkAuthAction } from './store/ApiActions';

store.dispatch(fetchOrdersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App offers={offerMocks} reviews={ReviewsMock} />);
