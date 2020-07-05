import React from "react";

import MessageList from "../../components/message-list/message-list";

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

  handleTextSendClick = (event) => {
    if (event.target.parentElement.children[0].value !== "") {
      this.setState({
        ...this.state, 
        todaysMessages: 
          [...this.state.todaysMessages, 
          {text: event.target.parentElement.children[0].value, createdAt: new Date()}]
      });
      event.target.parentElement.children[0].value = "";
    }
  }

  handleTextSendEnter = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      this.setState({
        ...this.state, 
        todaysMessages: 
          [...this.state.todaysMessages, 
          {text: event.target.value, createdAt: new Date()}]
      });
      event.target.value = "";
      // event.target.parentElement.previousSibling.scrollTop = event.target.parentElement.previousSibling.scrollHeight*2, 1000;
    }
  }

  render() {
    return (
      <div>
        {
          this.props.signedIn ?
          <div>
            <MessageList messages={this.state.todaysMessages} />
            <Input
              fluid
              placeholder="Type a message..."
              icon={<></>}
              onKeyPress={(event) => {
                this.handleTextSendEnter(event);
              }}
              style={{position: "fixed", bottom: "0px", left: "0px", right: "0px"}}
            >
              <input style={{borderRadius: "100px"}} />
              <i className="inverted circular link paper plane icon" 
                onClick={(event) => {
                  this.handleTextSendClick(event);
                }}
              />
            </Input>
          </div>
          :
          <div>
            <p>Sign the heck in</p>
          </div>
        }
      </div>
    );
  }
}

export default HomePage;
