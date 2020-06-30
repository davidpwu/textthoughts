import React from "react";

const Message = ({text, createdAt}) => (
  <>
    <p>{text} - Sent {createdAt?.toString()}</p>
  </>
)

export default Message;
