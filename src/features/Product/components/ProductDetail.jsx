import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getItem } from "../productSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const { slug } = useParams();

  useEffect(() => {
    dispatch({
      type: getItem.type,
      payload: slug,
    });
  }, [dispatch, slug]);
  return (
    <>
      <div className="product-shop">
        <div className="flex-row row">
          <div className="mb-3 px-3 px-md-2 col-12 col-md-5 col-lg-5">
            <div className="position-relative">
              <img src={product.image} className="item-image" alt="" />
            </div>
          </div>
          <div className="mb-3 px-3 px-md-2 col-12 col-md-7 col-lg-7">
            <div className="product-container">
              <div className="item-box">
                <div className="item-details">
                  <div className="item-name one-line-ellipsis">
                    {product.name}
                  </div>
                  <p className="sku">{product.sku}</p>
                  <hr />
                  <p className="item-desc">{product.description}</p>
                  <p className="price">${product.price}</p>
                </div>
                <div className="item-customize">
                  <div className="input-box">
                    <label>Quantity</label>
                    <input
                      type="number"
                      autoComplete="on"
                      step="step"
                      min="1"
                      max={product.quantity}
                      pattern="[0-9]"
                      disabled={product.quantity <= 0 ? "true" : ""}
                      name="quantity"
                      placeholder="Product Quantity"
                      className="input-number"
                    />
                  </div>
                </div>
                <div className="my-4 item-share">
                  <ul className="d-flex flex-row mx-0 mb-0 justify-content-center justify-content-md-start share-box">
                    <li>
                      <button
                        aria-label="facebook"
                        className="react-share__ShareButton share-btn facebook"
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          padding: "0px",
                          font: "inherit",
                          color: "inherit",
                          cursor: "pointer",
                        }}
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </li>
                    <li>
                      <button
                        aria-label="twitter"
                        className="react-share__ShareButton share-btn twitter"
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          padding: "0px",
                          font: "inherit",
                          color: "inherit",
                          cursor: "pointer",
                        }}
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                    </li>
                    <li>
                      <button
                        aria-label="envelope"
                        className="react-share__ShareButton share-btn envelope"
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          padding: "0px",
                          font: "inherit",
                          color: "inherit",
                          cursor: "pointer",
                        }}
                      >
                        <i className="far fa-envelope"></i>
                      </button>
                    </li>
                    <li>
                      <button
                        aria-label="whatsapp"
                        className="react-share__ShareButton share-btn whatsapp"
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          padding: "0px",
                          font: "inherit",
                          color: "inherit",
                          cursor: "pointer",
                        }}
                      >
                        <i className="fab fa-whatsapp"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
