import React from "react";

import Message from "../..//components/message/message";

import {Container, Input} from "semantic-ui-react";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hello: "world"
    };
  }

  render() {
    return (
      <>
        <Container style={{display: "flex", flexDirection: "column", height: 500, alignContent: "center"}}>
          {
            this.props.signedIn ?
            <div>
              <Message text={"I'm an example message"} sentDate={new Date()} />
              <Message text={"I'm an example message"} sentDate={new Date()} />
              <Message text={"I'm an example message"} sentDate={new Date()} />

              <Input 
                fluid 
                icon="search" 
              />
            </div>
            :
            <p>Sign the heck in</p>
          }
        </Container>
      </>
    );
  }
}

export default HomePage;
