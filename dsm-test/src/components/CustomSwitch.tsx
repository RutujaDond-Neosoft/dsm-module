import React, { useState } from "react";
import { Switch } from "dsm-structure";

const CustomSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => setChecked(!checked);

  return (
    <>
      <div style={{ padding: "20px" }}>
        <Switch
          name="testSwitch"
          label="Turn it on"
          value={checked}
          handleChangeValue={handleToggle}
        />
      </div>
    </>
  );
};

export default CustomSwitch;
