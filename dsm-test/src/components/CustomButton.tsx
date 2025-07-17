import React from "react";
import { Button } from "dsm-structure";

const CustomButton: React.FC = () => {
  return (
    <>
    <div>
      <Button
        id="test"
        // href="https://www.google.com"
        variant="success"
        label="Test Button"
        size="large"
        tooltipText="Click to save data"
        tooltipPlacement="bottom"
        badgeContent={2}
        startIcon={<i className="fa fa-save" />}
        onClick={() => alert("Saved")}
      />
      </div>
    </>
  );
};

export default CustomButton;
