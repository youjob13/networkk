import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { withLazyLoading } from "./hoc/withLazyLoading";
import { initializeApp } from "./redux/appReducer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import "./App.css";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

const Login = React.lazy(() => import("./components/Login/Login"));

class App extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line , react/prop-types
    (this.props as any).initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }

  catchAllUnhandledErrors = (PromiseRejectionEvent: PromiseRejectionEvent) => {
    console.log(PromiseRejectionEvent);

    alert("Some Error");
  };

  render() {
    // eslint-disable-next-line react/prop-types
    if (!(this.props as any).initialized) return <Preloader />;
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route
              path="/profile/:userId?"
              render={withLazyLoading(ProfileContainer)}
            />
            <Route path="/dialogs" render={withLazyLoading(DialogsContainer)} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/friends" render={() => <FriendsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route exact path="/login" render={withLazyLoading(Login)} />
            <Redirect exact from="/" to="/profile" />
            <Route path="*" render={() => <div>404</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ app }: any) => ({
  initialized: app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
