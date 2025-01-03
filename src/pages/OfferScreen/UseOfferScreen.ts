import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Offer } from '../../props/Offers';
import { Review } from '../../props/Review';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import { fetchOffer } from '../../store/ApiActions';

type OfferScreenState = {
  offer: Offer | undefined;
  reviews: Review[];
  nearbyOffers: Offer[];
  error: Error | undefined;
  isLoading: boolean;
};

export function useOfferScreen(): OfferScreenState {
  const { offerId } = useParams<{ offerId?: string }>();
  const dispatch = useAppDispatch();
  const currentOfferState = useAppSelector((state) => state.currentOffer);
  const [state, setState] = useState<{
    error: Error | undefined;
    isLoading: boolean;
  }>({ error: undefined, isLoading: true });

  useEffect(() => {
    if (offerId === undefined) {
      setState({ ...state, error: new Error('Invalid offerId') });
      return;
    }
    setState({ ...state, isLoading: true });
    dispatch(fetchOffer(offerId))
      .unwrap()
      .catch((e) => {
        if (e instanceof Error) {
          setState({ ...state, error: e });
        }
      })
      .finally(() => {
        setState({ ...state, isLoading: false });
      });
  }, [dispatch, offerId]);

  return { ...currentOfferState, ...state };
}
