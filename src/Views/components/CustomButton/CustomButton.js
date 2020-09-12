import React from 'react';

import './CustomButton.css';

const CustomButton = (props) => {
  const { type, text, onClick } = props;
  return <button className="btn" type={type} onClick={onClick}>{text}</button>;
};

CustomButton.defaultProps = {
  type: 'button',
  text: 'Button',
};

export { CustomButton };
