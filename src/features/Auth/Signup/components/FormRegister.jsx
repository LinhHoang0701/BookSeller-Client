import React from "react";
import { FastField, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";

import InputField from "../../../../share/CustomField/InputField";
import { createUser } from "../../authSlice";

const FormRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  };
  const FormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is invalid")
      .required("Enter your email please!"),
    firstName: Yup.string()
      .min(1, "First name is too short - should be 8 chars minimum.")
      .required("Enter your first name please!"),
    lastName: Yup.string()
      .min(1, "Last name is too short - should be 8 chars minimum.")
      .required("Enter your last name please!"),
    password: Yup.string()
      .required("Enter password please!")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });

  const handleRegister = (values) => {
    dispatch({
      type: createUser.type,
      payload: { values, history },
    });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={(values) => {
          handleRegister(values);
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
                        placeholder="Email"
                      />
                      <FastField
                        component={InputField}
                        className={
                          "form-control form-control-md" +
                          (errors.firstName && touched.firstName
                            ? " invalid"
                            : "")
                        }
                        type="firstName"
                        name="firstName"
                        placeholder="First Name"
                      />
                      <FastField
                        component={InputField}
                        className={
                          "form-control form-control-md" +
                          (errors.lastName && touched.lastName
                            ? " invalid"
                            : "")
                        }
                        type="lastName"
                        name="lastName"
                        placeholder="Last Name"
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
                        name="password"
                        placeholder="Password"
                      />
                      <hr />

                      <div className="d-flex ">
                        <button
                          className="input-btn custom-btn-primary md text-only icon-left "
                          type="submit"
                        >
                          Sign up
                        </button>
                        <button
                          type="button"
                          className="input-btn ml-md-3 custom-btn-link md text-only icon-left "
                        >
                          <Link className="btn-text" to="/login">
                            Back To Login
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

export default FormRegister;
