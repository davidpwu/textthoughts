import React from "react";

import {Container, Button} from "semantic-ui-react";

const ProfilePage = ({signOut}) => (
  <>
    <Container>
      <h1>Profile</h1>
      <Button onClick={() => signOut()}>Sign Out</Button>
      <hr />
      <Button>Export Data (Not implemented)</Button>
      <hr />
      <Button color="yellow">Edit Account (Not implemented)</Button>
      <Button color="red">Delete Account (Not implemented)</Button>
    </Container>
  </>
)

export default ProfilePage;
