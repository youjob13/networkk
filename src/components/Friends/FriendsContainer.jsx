import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import Friends from "./Friends";

// const FriendsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {({ getState }) => {
//         return <Friends friends={getState().friendsPage.friends} />;
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = ({ friendsPage }) => {
  return {
    friends: friendsPage.friends,
  };
};

export default compose(connect(mapStateToProps), withAuthRedirect)(Friends);
