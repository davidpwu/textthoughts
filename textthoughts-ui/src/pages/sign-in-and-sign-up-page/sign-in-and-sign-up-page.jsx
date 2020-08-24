import React from "react";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import {Link} from "react-router-dom";

import "./sign-in-and-sign-up-page.styles.scss";

const onSubmitSignIn = (signInEmail, signInPassword, signIn) => {
  // If production, use relative link
  let fetchLink = "/signin"
  // If development, use localhost link instead of relative link
  if (process.env.NODE_ENV !== "production") {
    fetchLink = "http://localhost:3001/signin";
  }
  
  fetch(fetchLink, {
    method: "post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      email: signInEmail,
      password: signInPassword
    })
  })
    .then(res => res.json())
    .then(data => {signIn()})
    // .then(user => {
      // if (user.id) {
        // this.props.loadUser(user)
        // this.props.onRouteChange('home');
      // }
    // })
}

const SignInAndSignUpPage = ({signIn}) => {
  // const [signInEmail, setSignInEmail] = useState("");
  // const [signInPassword, setSignInPassword] = useState("");

  return (
    <div className="sign-in-and-sign-up-page">
      <Link
        className="sign-in-example"
        onClick={
          () => onSubmitSignIn("example@example.com", "examplepass", signIn)
        }
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        Sign Into Example Account
      </Link>
      <div className="forms">
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
}

export default SignInAndSignUpPage;
