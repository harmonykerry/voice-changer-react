import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Box sx={{ textAlign: "center", mt: "40px" }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Voice Changer
      </Typography>
    </Box>
  );
};

export default Header;
