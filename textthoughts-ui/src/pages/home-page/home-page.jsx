import React from "react";

import MessageList from "../../components/message-list/message-list";
import MessageInput from "../../components/message-input/message-input";
import {Button} from "semantic-ui-react";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      todaysMessages: [
        {text: "This is message one from today", createdAt: new Date()},
        {text: "This is message two from today", createdAt: new Date()},
        {text: "This is message three from today", createdAt: new Date()}
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

  checkDateEquality(d1, d2) {
    if (d1.getMonth() === d2.getMonth() 
      && d1.getDate() === d2.getDate() 
      && d1.getFullYear() === d2.getFullYear()
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        {
          this.props.signedIn ?
          <div>
            {
              this.checkDateEquality(this.props.selectedDate, new Date()) 
              ? 
              <MessageList messages={this.state.todaysMessages} />
              : 
              <MessageList messages={null} />
            }
            {
              this.checkDateEquality(this.props.selectedDate, new Date()) 
              ? 
              <MessageInput 
                handleTextSendEnter={this.handleTextSendEnter}  
                handleTextSendClick={this.handleTextSendClick}
              />
              : 
              <Button 
                fluid
                color="blue" 
                onClick={() => this.props.setDate(new Date())}
                style={{
                  position: "fixed", 
                  bottom: "0px", 
                  left: "0px", 
                  right: "0px", 
                  height: "37.67px",
                  borderRadius: "100px"
                }}
              >
                Jump to Today to Send Texts
              </Button>
            }
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
