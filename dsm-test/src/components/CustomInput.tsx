import React, { useState } from "react";
import { Input } from "dsm-structure";

const CustomInput = () => {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <Input
        name="test"
        label="Test Input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Your Email"
        // required
        size="large"
        // state="disabled"
        // hintText="Add the fields here"
        // floatingLabel
        capitalise
        maxlength={10}
        type="password"
      />
    </div>
  );
};

export default CustomInput;