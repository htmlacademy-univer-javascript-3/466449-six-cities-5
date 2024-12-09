﻿import { useState } from 'react';
import cn from 'classnames';
import { SortingOrder, sortingOrders } from '../props/SortingOrder';
import { useAppDispatch, useAppSelector } from '../store/Hooks';
import { changeSortingOrderAction } from '../store/Action';

export function SortingOrderList() {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOrder = useAppSelector((state) => state.sortingOrder);
  const dispatch = useAppDispatch();

  const open = () => setIsOpen(!isOpen);

  const changeOrder = (order: SortingOrder) => {
    dispatch(changeSortingOrderAction(order));
    open();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={open}>
        {selectedOrder}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={cn('places__options', 'places__options--custom', {
          'places__options--opened': isOpen,
        })}
      >
        {Object.keys(sortingOrders).map((order) => (
          <li
            key={order}
            className={cn('places__option', {
              'places__option--active': order === selectedOrder,
            })}
            tabIndex={0}
            onClick={() => changeOrder(order as SortingOrder)}
          >
            {order}
          </li>
        ))}
      </ul>
    </form>
  );
}