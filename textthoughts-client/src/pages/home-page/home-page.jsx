import React from "react";

import Message from "../..//components/message/message";

import {Container, Input, Icon} from "semantic-ui-react";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      todaysMessages: [
        {text: "This is message one", createdAt: new Date()},
        {text: "This is message two", createdAt: new Date()},
        {text: "This is message three", createdAt: new Date()},
        {text: "This is message four", createdAt: new Date()},
        {text: "This is message five", createdAt: new Date()}
      ]
    };
  }

  render() {
    return (
      <>
        <Container style={{display: "flex", flexDirection: "column", height: 500, alignContent: "center"}}>
          {
            this.props.signedIn ?
            <div>
              <Message text={"I'm an example message"} createdAt={new Date()} />
              <Message text={"I'm an example message"} createdAt={new Date()} />
              <Message text={"I'm an example message"} createdAt={new Date()} />
              {
                this.state.todaysMessages.map(({text, createdAt}) => (
                  <Message text={text} createdAt={createdAt} key={createdAt} />
                ))
              }

              <Input 
                fluid
                icon={
                  <Icon name="paper plane" inverted circular link 
                    onClick={(event) => {
                      this.setState({
                        ...this.state, 
                        todaysMessages: 
                          [...this.state.todaysMessages, 
                          {text: event.target.parentElement.children[0].value, createdAt: new Date()}]
                      });
                    }}
                  />
                }
                onChange={(event) => this.setState({what: event.target.value})}
                onSubmit={(event) => console.log(event)}
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
