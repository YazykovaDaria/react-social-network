import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {logout} from '../../redux/authReducer';

class HeaderAPIcontainer extends React.Component {

  render() {
    return <Header {...this.props}></Header>
  }
}

const mapStateToProps = (state) => ({
isAuth: state.auth.isAuth,
login: state.auth.login,
})

const HeaderContainer = connect(mapStateToProps, {logout})(HeaderAPIcontainer)

export default HeaderContainer;