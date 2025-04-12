import React, { useState } from 'react';
import './index.css';

function ColorPicker() {
  const [color, setColor] = useState('#ffffff');

  function handleChange(event) {
    setColor(event.target.value);
  }

  return (
    <>
      <div>
        <h2 className='heading'>Color Picker</h2>

        <input
          type="color"
          value={color}
          onChange={handleChange}
          style={{
            width: 50,
            height: 50,
            border: '1px solid black',
            margin: 20
          }}
        />

        <div
          className='colorBox'
          style={{
            backgroundColor: color,
            width: 250,
            height: 100,
            border: '1px solid black',
            borderRadius: 10
          }}
        ></div>

        <h3 className='code'>{color}</h3>
      </div>
    </>
  );
}

export default ColorPicker;
