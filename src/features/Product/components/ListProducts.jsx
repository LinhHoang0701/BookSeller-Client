import React from "react";
import "rc-slider/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "rc-slider";

import { getProduct, rangePrice } from "../productSlice";
import SelectOption from "../../../components/Common/SelectOption";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const sortOptions = [
  { value: 0, label: "Newest First" },
  { value: 1, label: "Price High to Low" },
  { value: 2, label: "Price Low to High" },
];

const ListProducts = () => {
  const { products, totalProducts, page, filter } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  const handleChangeSelect = (option) => {
    const { value } = option;
    if (value === 1) {
      dispatch({
        type: getProduct.type,
        payload: { ...filter, order: value, sortOrder: { price: -1 } },
      });
    } else if (value === 2) {
      dispatch({
        type: getProduct.type,
        payload: { ...filter, order: value, sortOrder: { price: 1 } },
      });
    } else {
      dispatch({
        type: getProduct.type,
        payload: { ...filter, order: value, sortOrder: { _id: -1 } },
      });
    }
  };

  return (
    <>
      <div className="row row-cols-12">
        <div className="col-12 order-1 col-sm-12 order-sm-1 col-md-12 order-md-1 col-lg-3 order-lg-1">
          <div className="product-filter">
            <div className="mb-4 card">
              <h3 className="card-header">Price</h3>
              <div className="card-body">
                <div className="mx-2 mb-3 sliderArea">
                  <Range
                    marks={{
                      1: `$1`,
                      500: `$500`,
                    }}
                    min={1}
                    max={500}
                    defaultValue={[1, 500]}
                    tipFormatter={(value) => value}
                    onAfterChange={(value) => {
                      dispatch({ type: rangePrice.type, payload: value });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 order-2 col-sm-12 order-sm-2 col-md-12 order-md-2 col-lg-9 order-lg-2">
          <div className="align-items-center row">
            <div className="text-center text-md-left mt-3 mt-md-0 mb-1 mb-md-0 col-12 order-1 col-sm-12 order-sm-1 col-md-5 order-md-1 col-lg-6 order-lg-1">
              <b>Showing: </b>
              {`${
                totalProducts < 8
                  ? totalProducts
                  : 8 * page - 8 == 0
                  ? 1
                  : 8 * page - 8 + 1
              } – ${
                totalProducts < 8
                  ? totalProducts
                  : 8 * page < totalProducts
                  ? 8 * page
                  : totalProducts
              } products of ${totalProducts} products`}
            </div>
            <div className="text-right pr-0 d-none d-md-block col-12 order-2 col-sm-12 order-sm-2 col-md-2 order-md-2 col-lg-2 order-lg-2">
              <b>Sort by</b>
            </div>
            <div className="col-12 order-2 col-sm-12 order-sm-2 col-md-5 order-md-2 col-lg-4 order-lg-2">
              <SelectOption
                options={sortOptions}
                onChange={handleChangeSelect}
              />
            </div>
          </div>
          <div className="products-shop">
            <div className="product-list">
              {products.map((product) => {
                return (
                  <div className="mb-3 mb-md-0" key={product._id}>
                    <div className="product-container">
                      <div className="item-box">
                        <div className="item-link">
                          <Link
                            className="d-flex flex-column h-100"
                            to={`/product/${product.slug}`}
                          >
                            <div className="item-image-container">
                              <div className="item-image-box">
                                <img
                                  src={product.image}
                                  className="item-image"
                                />
                              </div>
                            </div>
                            <div className="item-body">
                              <div className="item-details p-3">
                                <h1 className="item-name">{product.name}</h1>
                                <p className="by">{product.description}</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row justify-content-between align-items-center px-4 mb-2 item-footer">
                              <p className="price mb-0">${product.price}</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProducts;
