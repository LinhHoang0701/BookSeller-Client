import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";

import UserRole from "../../../components/UserRoles";
import InputField from "../../../share/CustomField/InputField";
import { updateProfile } from "../userSlice";
import { useHistory } from "react-router-dom";

const AccountDetails = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const initialValues = {
    phoneNumber: user.phoneNumber,
    firstName: user.firstName,
    lastName: user.lastName,
  };

  const FormSchema = Yup.object().shape({
    lastName: Yup.string().required("Enter your last name please!"),
    firstName: Yup.string().required("Enter first name please!"),
    phoneNumber: Yup.string()
      .required("Enter phone number please!")
      .min(10, "Phone number should be 10 chars minimum.")
      .max(10, "Phone number should be 10 chars minimum."),
  });

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={(values) => {
        dispatch({ type: updateProfile.type, payload: { values, history } });
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <div className="account">
          <div className="sub-page">
            <div className="subpage-header">
              <h2>Account Details</h2>
            </div>
            <div className="subpage-body">
              <div className="account-details">
                <div className="info">
                  <div className="desc">
                    <p className="one-line-ellipsis mr-3">
                      Login By {user.email}
                    </p>
                    <UserRole user={user} />
                  </div>
                </div>
                <Form>
                  <Row>
                    <Col xs="12" md="6">
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
                        label="First Name"
                        placeholder="First Name"
                      />
                    </Col>
                    <Col xs="12" md="6">
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
                        label="Last Name"
                        placeholder="Last Name"
                      />
                    </Col>
                    <Col xs="12" md="12">
                      <FastField
                        component={InputField}
                        className={
                          "form-control form-control-md" +
                          (errors.phoneNumber && touched.phoneNumber
                            ? " invalid"
                            : "")
                        }
                        type="phoneNumber"
                        name="phoneNumber"
                        label="Phone Number"
                        placeholder="Phone Number"
                      />
                    </Col>
                  </Row>
                  <hr />
                  <div className="profile-actions">
                    <button
                      className="input-btn custom-btn-secondary md text-only icon-left "
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default AccountDetails;
