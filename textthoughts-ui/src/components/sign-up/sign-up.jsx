import React from "react";

import {Button, Form} from "semantic-ui-react";

// import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  }

  // handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const {displayName, email, password, confirmPassword} = this.state;
  //   if (password !== confirmPassword) {
  //     alert("Passwords don't match");
  //     return;
  //   } else {
  //     try {
  //       const {user} = await auth.createUserWithEmailAndPassword(email, password);
  //       await createUserProfileDocument(user, {displayName});
  //       this.setState({displayName: "", email: "", password: "", confirmPassword: ""});
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  // }

  render() {
    return(
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your email and password</span>

        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Display Name</label>
            <input 
              type="text" 
              name="displayName" 
              placeholder="Display Name"
              required 
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Email"
              required 
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="Password"
              required 
            />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirm Password"
              required 
            />
          </Form.Field>
          <Button 
            type="submit" 
            style={{backgroundColor: "rgb(255, 190, 87)", color: "white"}}
          >
            Sign Up
          </Button>
        </Form>
      </div>
    )
  }
}

export default SignUp;
