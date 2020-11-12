import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  getProfile,
  getStatus,
  savePhoto,
  saveProfile,
  updateStatus,
} from "../../redux/profileReducer";
import Profile from "./Profile";

const ProfileContainer = (props) => {
  useEffect(() => {
    let userId = props.match.params.userId;
    if (!userId) {
      userId = props.authorizedUserId;
      if (!userId) props.history.push("/login");
    }
    props.getProfile(userId);
    props.getStatus(userId);
  }, [props.match.params.userId, props.isAuth]);

  return (
    <Profile
      saveProfile={props.saveProfile}
      isOwner={!props.match.params.userId}
      {...props}
      status={props.status}
      savePhoto={props.savePhoto}
      updateStatus={props.updateStatus}
    />
  );
};

const mapStateToProps = ({ profilePage, auth }) => ({
  profile: profilePage.profile,
  status: profilePage.status,
  authorizedUserId: auth.userId,
  isAuth: auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    getProfile,
    updateStatus,
    getStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter
)(ProfileContainer);
