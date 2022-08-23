import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getProfile, getUserStatus, updateUserStatus} from '../../../redux/profileReducer';
import {useParams} from 'react-router-dom';
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import { compose } from "redux";


// обёртка для хука, чтобы работал способ из урока 60

export function withRouter(Children) {
  return(props) => {
    const match = {params: useParams()};
    return <Children {...props} match={match}/>
  }
}


class ProfileContainer extends React.Component {

componentDidMount() {
  let userId = this.props.match.params.userId;
  if (!userId) {
userId = 25229;
  }
  this.props.getProfile(userId);
  this.props.getUserStatus(userId);
}

  render() {
    return (
      <section>
<Profile {...this.props}></Profile>
</section>
    )
  }
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  userStatus: state.profilePage.userStatus
  })

export default compose(
  connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus}),
  withRouter,
  withAuthRedirect
  )(ProfileContainer);