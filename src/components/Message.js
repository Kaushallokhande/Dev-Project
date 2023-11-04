import React, { useEffect } from 'react';

const Message = ({ message, setMessage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(null);
    }, 3000); // Messages will disappear after 3 seconds (adjust as needed)

    return () => {
      clearTimeout(timer);
    };
  }, [message, setMessage]);

  return message ? (
    <div className={message.type}>
      {message.text}
    </div>
  ) : null;
};

export default Message;
