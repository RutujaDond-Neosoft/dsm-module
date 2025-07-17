import React, { useState } from 'react';
import { Slider } from 'dsm-structure';

const CustomSlider = () => {
  const [volume, setVolume] = useState(30);

  return (
    <div style={{ padding: '20px' }}>
      <Slider
        label="Adjust Volume"
        value={volume}
        min={0}
        max={100}
        step={5}
        getValueCallback={setVolume}
      />
    </div>
  );
};

export default CustomSlider;