import React from 'react';

import './custom-button.styles.css';

const CustomButton = ({ bold, footer, handleClick, children }) => (
  <button
    className={`btn ${bold ? 'btn--bold' : ''} ${footer ? 'btn--footer' : ''}`}
    onClick={handleClick}
  >
    {children}
  </button>
);

export default CustomButton;
