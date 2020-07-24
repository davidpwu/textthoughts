import React from "react";

import {Link} from "react-router-dom";
import {Button, Container, Header} from "semantic-ui-react";

const Splash = () => (
  <Container 
    style={{
      textAlign: "center", 
      marginTop: "25vh",
      display: "flex",
      flexDirection: "column"
    }}
  >
    <Header as="h1" style={{margin: "0px"}}>Welcome to</Header>
    <hr style={{width: "50vw"}} />
    <Header as="h2" style={{margin: "0px"}}>
      <img 
        src="/android-chrome-192x192.png" 
        alt="TextThoughts Logo" 
        className="logo" 
      />
      <Header.Content>
        TextThoughts
        <Header.Subheader>The Unstructured Journaling App</Header.Subheader>
      </Header.Content>
    </Header>
    <Link to="/signin">
      <Button size="massive" style={{backgroundColor: "rgb(255, 190, 87)", color: "white"}}>
        Sign In
      </Button>
    </Link>
    <Link to="/about" style={{marginTop: "30px"}}>Learn More</Link>
  </Container>
)

export default Splash;
