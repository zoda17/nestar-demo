import { Stack } from "@mui/material";
import React from "react";

const TopAgentCard = () => {
  return (
    <Stack className='top-agent-card'>
      <img src='/img/profile/girl.svg' alt='' />

      <strong>Lucy</strong>
      <span>Agent</span>
    </Stack>
  );
};

export default TopAgentCard;
