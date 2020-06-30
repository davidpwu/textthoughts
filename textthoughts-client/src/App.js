import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import Navigation from "./components/navigation/navigation";
import HomePage from "./pages/home-page/home-page";
import AboutPage from "./pages/about-page/about-page";
import ProfilePage from "./pages/profile-page/profile-page";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: true
    };
  }

  signOut = () => {
    this.setState({signedIn: false});
  }

  render() {
    return (
      <>
        <Navigation signedIn={this.state.signedIn} signOut={this.signOut} />
        <Switch>
          <Route exact path="/" 
            render={() => (
              this.state.signedIn ? (
                <HomePage signedIn={this.state.signedIn} />
              ) : (
                <Redirect to="/signin" />
              )
            )}
          />
          <Route exact path="/about" 
            render={() => (
              <AboutPage />
            )}
          />
          <Route exact path="/profile" 
            render={() => (
              this.state.signedIn ? (
                <ProfilePage />
              ) : (
                <Redirect to="/signin" />
              )
            )}
          />
          <Route 
            exact 
            path="/signin" 
            render={() => 
              this.state.signedIn ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            } 
          />
        </Switch>
      </>
    );
  }
}

export default App;
