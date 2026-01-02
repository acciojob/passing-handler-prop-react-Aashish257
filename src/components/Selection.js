import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  const [style, setStyle] = useState({ background: '#eee' });

  const handleClick = () => {
    applyColor(setStyle);
  };

  return (
    <div
      className="selection"
      style={style}
      onClick={handleClick}
    >
      Click Me
    </div>
  );
};

export default Selection;
