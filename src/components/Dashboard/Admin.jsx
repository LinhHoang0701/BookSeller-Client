import { Switch, Route } from "react-router-dom";
import { Row, Col } from "reactstrap";

import AccountMenu from "../AccountMenu";
import Page404 from "../Common/Page404";
import AccountDetails from "../../features/User/components/AccountDetails";
import Products from "../../features/User/components/Products";
import Users from "../../features/User/components/Users";
import AccountSecurity from "../../features/User/components/AccountSecurity";
import NewProduct from "../../features/User/components/NewProduct";

const Admin = (props) => {
  return (
    <div className="admin">
      <Row>
        <Col xs="12" md="5" xl="3">
          <AccountMenu {...props} />
        </Col>
        <Col xs="12" md="7" xl="9">
          <div className="panel-body">
            <Switch>
              <Route exact path="/dashboard" component={AccountDetails} />
              <Route path="/dashboard/security" component={AccountSecurity} />
              <Route exact path="/dashboard/product" component={Products} />
              <Route path="/dashboard/product/add" component={NewProduct} />
              <Route
                path="/dashboard/product/edit/:id"
                component={NewProduct}
              />
              <Route path="/dashboard/users" component={Users} />
              <Route path="*" component={Page404} />
            </Switch>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
