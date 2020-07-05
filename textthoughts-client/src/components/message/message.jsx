import React from "react";

import "./message.scss";

const Message = ({text, createdAt}) => {
  const createdAtHour = createdAt?.getHours();
  const createdAtMinute = createdAt?.getMinutes();

  // Add 0 to single digit numbers
  const displayCreatedAtHour = String(createdAtHour).length !== 2 ? `0${createdAtHour}` : createdAtHour;
  const displayCreatedAtMinute = String(createdAtMinute).length !== 2 ? `0${createdAtMinute}` : createdAtMinute;

  return (
    <div className="message">
      <p className="sent-time">Sent {displayCreatedAtHour}:{displayCreatedAtMinute}</p>
      <p className="message-text">{text}</p>
    </div>
  );
}

export default Message;
