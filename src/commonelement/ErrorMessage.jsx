import React from 'react';
import './ErrorMessage.css';  // Add your CSS file for styling

const ErrorMessage = ({ message, message1 }) => {
  // console.log(message);
  if (message1 !== '') {

    message = message1;
  }

  return (
    <div className="error-container">
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
