import React from "react";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import "./sign-in-and-sign-up-page.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up-page">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndSignUpPage;
