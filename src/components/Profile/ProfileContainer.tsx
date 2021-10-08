import React, { useEffect } from "react";
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

const ProfileContainer = (props: any) => {
  useEffect(() => {
    let {userId} = props.match.params;

    if (!userId) {
      userId = props.authorizedUserId;

      if (!userId) {
        props.history.push("/login");
      }
    }

    props.getProfile(userId);
    props.getStatus(userId);
    // eslint-disable-next-line react/destructuring-assignment
  }, [props.match.params.userId, props.isAuth]);

  return (
    <Profile
      // eslint-disable-next-line react/destructuring-assignment
      saveProfile={props.saveProfile}
      // eslint-disable-next-line react/destructuring-assignment
      isOwner={!props.match.params.userId}
      {...props}
      // eslint-disable-next-line react/destructuring-assignment
      status={props.status}
      // eslint-disable-next-line react/destructuring-assignment
      savePhoto={props.savePhoto}
      // eslint-disable-next-line react/destructuring-assignment
      updateStatus={props.updateStatus} // TODO: destructor
    />
  );
};

const mapStateToProps = ({ profilePage, auth }: any) => ({
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
)(ProfileContainer) as any;
