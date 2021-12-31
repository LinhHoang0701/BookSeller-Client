import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { getProduct } from "../../Product/productSlice";

const Products = () => {
  const { path } = useRouteMatch();
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch({
      type: getProduct.type,
      payload: {
        name: "all",
        min: 1,
        max: 500,
        order: 0,
        pageNumber: 1,
        sortOrder: { price: -1 },
      },
    });
  }, [dispatch]);
  return (
    <div className="product-dashboard">
      <div className="sub-page">
        <div className="subpage-header">
          <h2>Products</h2>
          <div className="action">
            <button
              className="input-btn custom-btn-none sm text-only icon-left"
              onClick={() => {
                history.push(`${path}/add`);
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div className="subpage-body">
          <div className="p-list">
            {products.map((product) => (
              <Link
                to={`${path}/edit/${product._id}`}
                key={product._id}
                className="d-flex flex-row align-items-center mx-0 mb-3 product-box"
              >
                <img className="item-image" src={product.image} alt="" />
                <div className="d-flex flex-column justify-content-center px-3 text-truncate">
                  <h4 className="text-truncate">{product.name}</h4>
                  <p className="mb-2 text-truncate">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
