import AppHead from "../components/app-head/app-head";
import Navigation from "../components/navigation/navigation";

import Link from "next/link";

import {Button, Checkbox, Form, Container} from "semantic-ui-react";

const SignIn = () => (
  <>
    <AppHead />
    <Navigation />
    <Container>
      <Link href="/"><Button>Return Home</Button></Link>

      <h1>Welcome to the SignIn page.</h1>

      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>

      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  </>
)

export default SignIn;
