﻿export function OfferGoods({ items }: { items?: string[] }) {
    return (
      <div className="offer__inside">
        <h2 className="offer__inside-title">What&apos;s inside</h2>
        <ul className="offer__inside-list">
          {items?.map((name) => (
            <li key={name} className="offer__inside-item">
              {name}
            </li>
          ))}
        </ul>
      </div>
    );
  }