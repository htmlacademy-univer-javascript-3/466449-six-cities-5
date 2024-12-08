import { _Location } from "./OffersMocks";
import { Offer } from "./OffersMocks";

export type State = {
  city: _Location;
  offers: Offer[];
};