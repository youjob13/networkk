import { logDOM } from "@testing-library/react";
import React, { useState } from "react";
import { MemoryRouter } from "react-router-dom";

import classes from "./Paginator.module.css";

const Paginator = ({
  totalItemsCount,
  currentPage,
  pageSize,
  changeCurrentPage,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  const onBClick = () => {
    setPortionNumber(portionNumber - 1);
  };
  const onAClick = () => {
    setPortionNumber(portionNumber + 1);
  };
  return (
    <div className={classes.pagination}>
      {portionNumber > 1 && <button onClick={onBClick}>a</button>}

      {pages
        .filter(
          (item) =>
            item >= leftPortionPageNumber && item <= rightPortionPageNumber
        )
        .map((item) => {
          console.log(1);
          return (
            <span
              className={
                currentPage === item ? classes.selectedPage : classes.page
              }
              onClick={(e) => {
                changeCurrentPage(item);
              }}
              key={item}
            >
              {item}
            </span>
          );
        })}

      {portionCount > portionNumber && <button onClick={onAClick}>b</button>}
    </div>
  );
};

export default Paginator;
