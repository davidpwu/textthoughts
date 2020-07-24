import React from "react";

import {Link} from "react-router-dom";
import {Button, Form} from "semantic-ui-react";

// import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  // handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const {email, password} = this.state;
  //   try {
  //     await auth.signInWithEmailAndPassword(email, password);
  //     this.setState({email: "", password: ""});
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  render() {
    return(
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <Form onSubmit={this.handleSubmit}>
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
          <Button 
            type="submit" 
            style={{backgroundColor: "rgb(255, 190, 87)", color: "white"}}
          >
            Sign In
          </Button>
          <Button
            type="submit"
            color="blue"
            href="http://localhost:3001/auth/google"
          >
            Sign In with Google
          </Button>
        </Form>
      </div>
    )
  }
}

export default SignIn;
