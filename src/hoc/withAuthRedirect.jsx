import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  })

const withAuthRedirect = (Component) => {
  
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to='/login'></Navigate>

      return <Component {...this.props}></Component>
    }
  }
  const ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent);
  return ConnectRedirectComponent;
}

export default withAuthRedirect;