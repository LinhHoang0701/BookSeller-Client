import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination";
import ListProducts from "./components/ListProducts";
import { getProduct } from "./productSlice";

const ProductPage = ({ isAuthenticated }) => {
  const dispatch = useDispatch();
  const { filter, totalProducts, products, page, pages } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    if (isAuthenticated) {
      dispatch({
        type: getProduct.type,
        payload: filter,
      });
    }
  }, [filter, dispatch, isAuthenticated]);
  return (
    <>
      <ListProducts />
      {totalProducts > 0 && (
        <div className="d-flex justify-content-center text-center mt-4">
          <Pagination
            filter={filter}
            products={products}
            pages={pages}
            page={page}
          />
        </div>
      )}
    </>
  );
};

export default ProductPage;
