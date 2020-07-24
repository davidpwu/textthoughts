import React, {useEffect} from "react";

import Message from "../message/message";

const MessageList = ({messages}) => {

  useEffect(() => {
    // Scroll to bottom on message send
    const self = document.getElementsByClassName("message-list")[0];
    self.scrollTop = self.scrollHeight;
  });

  return (
    <div
      className="message-list"
      style={{
        overflow: "auto",
        border: "1px solid lightgray", 
        position: "fixed",
        bottom: "37.67px",
        left: "0px",
        right: "0px",
        top: "40px",
        display: "flex",
        flexDirection: "column-reverse"
      }}
    >
      <div 
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end"
        }}
      >
        <Message text={"I'm an example message in message list"} createdAt={new Date()} />
        <Message text={"I'm the second example message in message list"} createdAt={new Date()} />
        {
          messages?.map(({text, createdAt}) => (
            <Message text={text} createdAt={createdAt} key={Math.random()} />
          ))
        }
      </div>
    </div>
  );
}

export default MessageList;
