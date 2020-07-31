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
      signedIn: false,
      selectedDate: new Date()
    };
  }

  signOut = () => {
    this.setState({signedIn: false});
  }

  signIn = () => {
    this.setState({signedIn: true});
  }

  setDate = (newDate) => {
    this.setState({selectedDate: newDate});
  }

  render() {
    return (
      <>
        <Navigation 
          signedIn={this.state.signedIn} 
          signOut={this.signOut} 
          selectedDate={this.state.selectedDate} 
          setDate={this.setDate} 
        />
        <Switch>
          <Route exact path="/" 
            render={() => (
              // this.state.signedIn ? (
                <HomePage 
                  signedIn={this.state.signedIn} 
                  selectedDate={this.state.selectedDate} 
                  setDate={this.setDate}
                />
              // ) : (
              //   <Redirect to="/signin" />
              // )
            )}
          />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/profile" 
            render={() => (
              this.state.signedIn ? (
                <ProfilePage signOut={this.signOut} />
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
                <SignInAndSignUpPage signIn={this.signIn} />
              )
            }
          />
        </Switch>
      </>
    );
  }
}

export default App;
