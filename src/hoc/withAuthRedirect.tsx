import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToPropsForRedirect = ({ auth }: any) => ({
  isAuth: auth.isAuth,
});

export const withAuthRedirect = (Component: any): any => {
  class RedirectComponent extends React.Component {
    render() {
      // eslint-disable-next-line react/destructuring-assignment,react/prop-types
      if (!(this.props as any).isAuth) {
        return <Redirect to="/login" />;
      }
      return <Component {...this.props} />;
    }
  }

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectedAuthRedirectComponent;
};
