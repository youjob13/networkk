import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { loginThunkCreator } from "../../redux/authReducer";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";

import classes from "../common/FormsControls/FormControls.module.css";
import style from "./Login.module.css";

const Login = ({ loginThunkCreator, isAuth, captchaUrl }) => {
  const onSubmit = (formData) => {
    loginThunkCreator(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (isAuth) return <Redirect to="/profile" />;
  return (
    <div className={style.loginPage}>
      <h1>Login</h1>
      <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = ({ handleSubmit, error, captchaUrl }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        className={style.input}
        validate={[required]}
        name="email"
        component={Input}
        type="text"
        placeholder="email"
      />
    </div>
    <div>
      <Field
        className={style.input}
        name="password"
        validate={[required]}
        component={Input}
        type="password"
        placeholder="password"
      />
    </div>
    <div>
      <Field
        name="rememberMe"
        component="input"
        type="checkbox"
        id="remember"
      />
      <label className={style.checkbox} htmlFor="remember">
        RememberMe
      </label>
    </div>
    {captchaUrl && <img src={captchaUrl} />}
    {captchaUrl && (
      <Field
        className={style.input}
        name="captcha"
        validate={[required]}
        component={Input}
        type="text"
      />
    )}
    {error && <div className={classes.formSummaryError}>{error}</div>}
    <div>
      <button className={style.signIn}>Sign In</button>
    </div>
  </form>
);

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
const mapStateToProps = ({ auth }) => ({
  isAuth: auth.isAuth,
  captchaUrl: auth.captchaUrl,
});
export default connect(mapStateToProps, { loginThunkCreator })(Login);
