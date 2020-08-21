import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Message(props) {
  const [message, SetMessage] = useState(
    "This is a message. You can change this by editing url"
  );

  useEffect(() => {
    SetMessage(props.match.params.msg);
  }, [message]);

  return (
    <div className="message">
      <div className="message__container">
        <h2>Happy Birthday to {message} !!</h2>
        <img
          src="https://images.unsplash.com/photo-1575310866542-778bdb501c4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default Message;
