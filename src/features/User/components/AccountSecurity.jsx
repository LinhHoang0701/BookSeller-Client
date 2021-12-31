import { FastField, Formik, Form } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Row, Col } from "reactstrap";

import InputField from "../../../share/CustomField/InputField";
import { reset } from "../../Auth/authSlice";

function AccountSecurity() {
  const dispatch = useDispatch();
  const history = useHistory();
  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) =>
        dispatch({ type: reset.type, payload: { values, history } })
      }
    >
      {({ errors, touched }) => (
        <div className="account">
          <div className="sub-page">
            <div className="subpage-header">
              <h2>Account Security</h2>
            </div>
            <div className="subpage-body">
              <div className="account-security">
                <h3>Reset Password</h3>
                <Form>
                  <Row>
                    <Col xs="12" md="6">
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
                        label="Password"
                        placeholder="Password"
                      />
                    </Col>
                    <Col xs="12" md="6">
                      <FastField
                        component={InputField}
                        className={
                          "form-control form-control-md" +
                          (errors.confirmPassword && touched.confirmPassword
                            ? " invalid"
                            : "")
                        }
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        placeholder="Confirm Password"
                      />
                    </Col>
                  </Row>
                  <hr />
                  <div className="profile-actions">
                    <button
                      className="input-btn custom-btn-secondary md text-only icon-left "
                      type="submit"
                    >
                      Reset Password
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
}

export default AccountSecurity;
