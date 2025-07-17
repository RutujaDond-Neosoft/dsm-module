import React from 'react';
import { Typography } from 'dsm-structure';

const CustomTypography = () => {
  return (
    <div>
      <Typography variant="h2" color="success">
        Welcome to DSM Test!
      </Typography>
      <Typography variant="body1" color="default">
        This is a subtitle
      </Typography>
    </div>
  );
};

export default CustomTypography;