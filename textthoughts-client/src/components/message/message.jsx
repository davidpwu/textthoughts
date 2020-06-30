import React from "react";

const Message = ({text, sentDate}) => (
  <>
    <p>{text} - Sent {sentDate.toString()}</p>
  </>
)

export default Message;
