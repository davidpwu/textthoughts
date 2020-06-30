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
          <p>{this.props.stars}</p>

          <Message text={"I'm an example message"} sentDate={new Date()} />
          <Message text={"I'm an example message"} sentDate={new Date()} />
          <Message text={"I'm an example message"} sentDate={new Date()} />

          <Input 
            fluid 
            icon="search" 
            // style={{alignSelf: "flex-end"}} 
          />
        </Container>
      </>
    );
  }
}

// Home.getInitialProps = async (ctx) => {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const json = await res.json();    
//   return {stars: json.stargazers_count};
// }

export default HomePage;
