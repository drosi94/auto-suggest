import React from 'react';

import './CustomButton.css';

const CustomButton = (props) => {
  const { type, text, disabled, onClick } = props;
  return (
    <button className="btn" type={type} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

CustomButton.defaultProps = {
  type: 'button',
  text: 'Button',
  disabled: false,
};

export { CustomButton };
