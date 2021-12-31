/**
 *
 * Pagination
 *
 */

import React from "react";
import { useDispatch } from "react-redux";
import {
  Pagination as RPagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import { changeFilter, getProduct } from "../../features/Product/productSlice";

let prev = 0;
let next = 0;
let last = 0;
let first = 0;

const Pagination = (props) => {
  const dispatch = useDispatch();
  const { pages, page, filter } = props;
  let currentPage = page;

  prev = currentPage > 0 ? currentPage - 1 : 0;
  last = pages;
  next = last === currentPage ? currentPage : currentPage + 1;

  let pageNumbers = [];
  for (let i = 1; i <= last; i++) {
    pageNumbers.push(i);
  }
  const handleClick = (e, pageNumber) => {
    e.preventDefault();
    dispatch({
      type: getProduct.type,
      payload: { ...filter, pageNumber },
    });
  };
  const handlePrev = (e, pageNumber) => {
    e.preventDefault();
    dispatch({
      type: getProduct.type,
      payload: { ...filter, pageNumber },
    });
  };

  return (
    <RPagination className="pagination">
      <PaginationItem>
        {prev === 0 ? (
          <PaginationLink disabled>Prev</PaginationLink>
        ) : (
          <PaginationLink
            onClick={(e) => handleClick(e, prev)}
            id={prev}
            href={prev}
          >
            Prev
          </PaginationLink>
        )}
      </PaginationItem>
      {pageNumbers.map((number, i) => (
        <RPagination key={i}>
          <PaginationItem
            active={pageNumbers[currentPage - 1] === number ? true : false}
          >
            <PaginationLink
              onClick={(e) => handleClick(e, number)}
              href={number}
              key={number}
              id={number}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        </RPagination>
      ))}

      <PaginationItem>
        {currentPage === last ? (
          <PaginationLink disabled>Next</PaginationLink>
        ) : (
          <PaginationLink
            onClick={(e) => handleClick(e, next)}
            id={pageNumbers[currentPage]}
            href={pageNumbers[currentPage]}
          >
            Next
          </PaginationLink>
        )}
      </PaginationItem>
    </RPagination>
  );
};

export default Pagination;
