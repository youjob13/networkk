import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessage } from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {({ dispatch, getState }) => {
//         const sendNewMessage = () => {
//           dispatch(sendMessageActionCreator()); //dispatch'им obj action
//         };
//         const changeNewMessageText = (text) => {
//           dispatch(changeNewMessageTextActionCreator(text));
//         };
//         return (
//           <Dialogs
//             sendNewMessage={sendNewMessage}
//             changeNewMessageText={changeNewMessageText}
//             newsMessageText={getState().dialogsPage.newsMessageText}
//             messagesData={getState().dialogsPage.messagesData}
//             dialogsData={getState().dialogsPage.dialogsData}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = ({ dialogsPage }) => ({
  dialogsPage,
});

const DialogsContainer = compose(
  connect(mapStateToProps, { sendMessage }), //get props from dialogs reducer
  withAuthRedirect //HOC - redirect on login page
)(Dialogs);
export default DialogsContainer;
