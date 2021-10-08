import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import Dialogs from "./Dialogs";

const DialogsContainer = compose(
  withAuthRedirect //HOC - redirect on login page
)(Dialogs);
export default DialogsContainer;
