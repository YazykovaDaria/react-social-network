import { connect } from "react-redux"
import { toggleFollow, setCurrentPage, getUsers } from "../../../redux/usersReducer"
import Users from "./Users";
import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import { compose } from "redux";


class UsersContainer extends React.Component{

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pagesSize)
  }

onPageChanded = (pageNumber) => {
this.props.setCurrentPage(pageNumber);
this.props.getUsers(pageNumber, this.props.pagesSize)
}

  render() {
  return <>
  {this.props.isFetching ? <Preloader></Preloader> : null}
  <Users usersCount={this.props.usersCount}
  pagesSize={this.props.pagesSize}
  currentPage={this.props.currentPage}
  onPageChanded={this.onPageChanded}
  toggleFollow={this.props.toggleFollow}
  users={this.props.users}
></Users>
</>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    usersCount: state.usersPage.usersCount,
    pagesSize: state.usersPage.pagesSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export default compose(
  connect(mapStateToProps, { toggleFollow, setCurrentPage, getUsers
}))(UsersContainer);