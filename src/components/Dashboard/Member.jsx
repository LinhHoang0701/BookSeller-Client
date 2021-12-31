/*
 *
 * Customer
 *
 */

import React from "react";

import { Switch, Route } from "react-router-dom";
import { Row, Col } from "reactstrap";
import AccountDetails from "../../features/User/components/AccountDetails";
import AccountSecurity from "../../features/User/components/AccountSecurity";

import AccountMenu from "../AccountMenu";
import Page404 from "../Common/Page404";

const Member = (props) => {
  return (
    <div className="member">
      <Row>
        <Col xs="12" md="5" xl="3">
          <AccountMenu {...props} />
        </Col>
        <Col xs="12" md="7" xl="9">
          <div className="panel-body">
            <Switch>
              <Route exact path="/dashboard" component={AccountDetails} />
              <Route path="/dashboard/security" component={AccountSecurity} />

              <Route path="*" component={Page404} />
            </Switch>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Member;
