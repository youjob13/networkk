import React, { ReactElement, useState } from 'react';

import classes from './Paginator.module.css';

export interface PaginatorProps {
  totalItemsCount: number;
  currentPage: number;
  pageSize: number;
  changeCurrentPage: any;
  portionSize?: number;
}

const Paginator = ({
  totalItemsCount,
  currentPage,
  pageSize,
  changeCurrentPage,
  portionSize = 10,
}: PaginatorProps): ReactElement => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }
  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);

  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;
  const onBClick = () => {
    setPortionNumber(portionNumber - 1);
  };
  const onAClick = () => {
    setPortionNumber(portionNumber + 1);
  };
  return (
    <div className={classes.pagination}>
      {portionNumber > 1 && (
        <button type="button" onClick={onBClick}>
          a
        </button>
      )}

      {pages
        .filter(
          item =>
            item >= leftPortionPageNumber && item <= rightPortionPageNumber,
        )
        .map(item => (
          <span
            role="button"
            className={
              currentPage === item ? classes.selectedPage : classes.page
            }
            onClick={e => {
              changeCurrentPage(item);
            }}
            key={item}
          >
            {item}
          </span>
        ))}

      {portionCount > portionNumber && (
        <button type="button" onClick={onAClick}>
          b
        </button>
      )}
    </div>
  );
};

export default Paginator;
