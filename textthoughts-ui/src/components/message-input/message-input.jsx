import React from "react";

import {Input} from "semantic-ui-react";

const MessageInput = ({handleTextSendEnter, handleTextSendClick}) => (
  <Input
    fluid
    placeholder="Type a message..."
    icon={<></>}
    onKeyPress={(event) => {
      handleTextSendEnter(event);
    }}
    style={{position: "fixed", bottom: "0px", left: "0px", right: "0px"}}
  >
    <input style={{borderRadius: "100px"}} />
    <i className="inverted circular link paper plane icon" 
      onClick={(event) => {
        handleTextSendClick(event);
      }}
    />
  </Input>
)

export default MessageInput;
