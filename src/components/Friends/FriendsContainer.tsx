import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Friends from "./Friends";
import { FriendsSelectorState } from "../../shared/models/store";

const mapStateToProps = ({ friendsPage }: FriendsSelectorState) => {
  return {
    friends: friendsPage.friends,
  };
};

export default compose(connect(mapStateToProps), withAuthRedirect)(Friends) as any;
