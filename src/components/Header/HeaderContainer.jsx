import { connect } from "react-redux";
import { logoutThunkCreator } from "../../redux/authReducer";
import Header from "./Header";

const mapStateToProps = ({ auth }) => ({
  isAuth: auth.isAuth,
  login: auth.login,
  photo: auth.photo,
});

export default connect(mapStateToProps, {
  logoutThunkCreator,
})(Header);
