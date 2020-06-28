import AppHead from "../components/app-head/app-head";
import Header from "../components/header/header";

import Link from "next/link";

import {Button, Container} from "semantic-ui-react";

const Profile = () => (
  <>
    <AppHead />
    <Header />
    <Container>
      <Link href="/"><Button>Return Home</Button></Link>

      <h1>Welcome to the Profile page</h1>
      <h2>Allow exporting data and what not here.</h2>
    </Container>
  </>
)

export default Profile;
