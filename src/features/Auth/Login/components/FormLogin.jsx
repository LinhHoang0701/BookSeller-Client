import React from "react";
import { FastField, Form, Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import InputField from "../../../../share/CustomField/InputField";
import { getUser } from "../../authSlice";

const FormLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const initialValues = {
    email: "",
    password: "",
  };

  const FormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is invalid")
      .required("Enter your email please!"),
    password: Yup.string()
      .required("Enter password please!")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });

  const handleSubmit = (values) => {
    dispatch({
      type: getUser.type,
      payload: { values, history },
    });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => {
          return (
            <div className="auth-page">
              <div className="row">
                <div className="p-0 col-12 order-2 col-md-6 order-md-1">
                  <div className="col-12 col-md-12">
                    <Form>
                      <FastField
                        component={InputField}
                        className={
                          "form-control form-control-md" +
                          (errors.email && touched.email ? " invalid" : "")
                        }
                        type="email"
                        name="email"
                        label="Email Address"
                        placeholder="Email"
                      />
                      <FastField
                        component={InputField}
                        className={
                          "form-control form-control-md" +
                          (errors.password && touched.password
                            ? " invalid"
                            : "")
                        }
                        type="password"
                        label="Password"
                        name="password"
                        placeholder="Password"
                      />
                      <hr />

                      <div className="d-flex ">
                        <button
                          className="input-btn custom-btn-primary md text-only icon-left "
                          type="submit"
                        >
                          Sign In
                        </button>
                        <button
                          type="button"
                          className="input-btn ml-md-3 custom-btn-link md text-only icon-left "
                        >
                          <Link className="btn-text" to="/register">
                            Need An Account?
                          </Link>
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default FormLogin;
