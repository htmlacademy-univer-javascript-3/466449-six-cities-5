import ReactDOM from 'react-dom/client';
import { App } from './components/App.tsx';
import { offerMocks } from './mocks/offers.ts';
import { ReviewsMock } from './mocks/reviews.ts';
import { store } from './store/Index';
import { fetchOrdersAction } from './store/ApiActions';

store.dispatch(fetchOrdersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App offers={offerMocks} reviews={ReviewsMock} isAuthorized= {false} />);
