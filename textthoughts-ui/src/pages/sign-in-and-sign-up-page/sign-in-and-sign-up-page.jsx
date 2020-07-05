import React, {useState} from "react";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import "./sign-in-and-sign-up-page.styles.scss";

const onSubmitSignIn = (signInEmail, signInPassword, signIn) => {
  fetch("http://localhost:3001/signin", {
    method: "post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      email: signInEmail,
      password: signInPassword
    })
  })
    .then(res => res.json())
    .then(data => {console.log(data); signIn()})
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
      <button onClick={() => onSubmitSignIn("a@gmail.com", "apass", signIn)}>Sign In A</button>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUpPage;
