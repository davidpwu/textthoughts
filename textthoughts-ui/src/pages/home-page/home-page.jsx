import React from "react";

import MessageList from "../../components/message-list/message-list";
import MessageInput from "../../components/message-input/message-input";

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
    }
  }

  render() {
    return (
      <div>
        {
          this.props.signedIn ?
          <div>
            <MessageList messages={this.state.todaysMessages} />
            <MessageInput 
              handleTextSendEnter={this.handleTextSendEnter}  
              handleTextSendClick={this.handleTextSendClick}
            />
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
