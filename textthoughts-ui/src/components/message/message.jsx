import React from "react";

import {Icon, Popup, Button} from "semantic-ui-react";

import "./message.scss";

const Message = ({text, createdAt}) => {
  const createdAtHour = createdAt?.getHours();
  const createdAtMinute = createdAt?.getMinutes();

  // Add 0 to single digit numbers
  const displayCreatedAtHour = String(createdAtHour).length !== 2 ? `0${createdAtHour}` : createdAtHour;
  const displayCreatedAtMinute = String(createdAtMinute).length !== 2 ? `0${createdAtMinute}` : createdAtMinute;

  return (
    <div className="message">
      
      <Popup
        trigger={
          <Icon name="ellipsis vertical" style={{cursor: "pointer"}} />
        }
        content={<Button color="red" icon="trash alternate" content="Delete (Not implemented)" />}
        on='click'
        position='top right'
      />
      <p className="sent-time">Sent {displayCreatedAtHour}:{displayCreatedAtMinute}</p>
      <p className="message-text">{text}</p>
    </div>
  );
}

export default Message;
