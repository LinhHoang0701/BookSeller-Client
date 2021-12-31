import { FastField, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import InputField from "../../../share/CustomField/InputField";
import {
  addProduct,
  deleteProduct,
  editProduct,
} from "../../Product/productSlice";

const NewProduct = () => {
  const { products } = useSelector((state) => state.product);
  const { id } = useParams();
  const product = products.find((product) => id === product._id);
  const dispatch = useDispatch();
  const history = useHistory();
  const initialValues = id
    ? {
        sku: product.sku,
        name: product.name,
        description: product.description,
        quantity: product.quantity,
        price: product.price,
        image: product.image,
      }
    : {
        sku: "",
        name: "",
        description: "",
        quantity: 1,
        price: 1,
        image: "",
      };
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={(values) => {
        if (id) {
          dispatch({
            type: editProduct.type,
            payload: { values, id, history },
          });
        } else {
          dispatch({ type: addProduct.type, payload: { values, history } });
        }
      }}
    >
      {({ errors, touched }) => (
        <div className="product-dashboard">
          <div className="sub-page">
            <div className="subpage-header">
              <h2>Products</h2>
              <div className="action">
                <button
                  className="input-btn custom-btn-none sm text-only icon-left"
                  onClick={() => {
                    history.push("/dashboard/product");
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
            <div className="subpage-body">
              <Form>
                <Row>
                  <Col xs="12" md="6">
                    <FastField
                      component={InputField}
                      className={
                        "form-control form-control-md" +
                        (errors.sku && touched.sku ? " invalid" : "")
                      }
                      type="text"
                      name="sku"
                      label="Sku"
                      placeholder="Sku"
                    />
                  </Col>
                  <Col xs="12" md="6">
                    <FastField
                      component={InputField}
                      className={
                        "form-control form-control-md" +
                        (errors.name && touched.name ? " invalid" : "")
                      }
                      type="text"
                      name="name"
                      label="Name"
                      placeholder="Name"
                    />
                  </Col>
                  <Col xs="12" md="12">
                    <FastField
                      component={InputField}
                      className={
                        "form-control form-control-md" +
                        (errors.description && touched.description
                          ? " invalid"
                          : "")
                      }
                      type="text"
                      name="description"
                      label="Description"
                      placeholder="Description"
                    />
                  </Col>
                  <Col xs="12" md="6">
                    <FastField
                      component={InputField}
                      className={
                        "form-control form-control-md" +
                        (errors.quantity && touched.quantity ? " invalid" : "")
                      }
                      type="number"
                      name="quantity"
                      label="Quantity"
                      placeholder="Quantity"
                    />
                  </Col>
                  <Col xs="12" md="6">
                    <FastField
                      component={InputField}
                      className={
                        "form-control form-control-md" +
                        (errors.price && touched.price ? " invalid" : "")
                      }
                      type="number"
                      name="price"
                      label="Price"
                      placeholder="Price"
                    />
                  </Col>
                  <Col xs="12" md="12">
                    <FastField
                      component={InputField}
                      className={
                        "form-control form-control-md" +
                        (errors.image && touched.image ? " invalid" : "")
                      }
                      type="text"
                      name="image"
                      label="ImageURL"
                      placeholder="ImageURL"
                    />
                  </Col>
                </Row>
                <hr />
                <div className="add-product-actions">
                  <button
                    className="input-btn custom-btn-secondary md text-only icon-left mr-2"
                    type="submit"
                  >
                    <span className="btn-text">Save</span>
                  </button>
                  {id ? (
                    <button
                      className="input-btn custom-btn-danger md text-only icon-left  "
                      type="button"
                      onClick={() =>
                        dispatch({
                          type: deleteProduct.type,
                          payload: { id, history },
                        })
                      }
                    >
                      <span className="btn-text">Delete</span>
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default NewProduct;
