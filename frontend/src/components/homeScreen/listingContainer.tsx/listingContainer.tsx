import { Box, Container, Typography } from "@mui/material";
import React from "react";

const ListingContainer = () => {
  return (
    <Container sx={{ marginLeft: "23px", padding: 0 }}>
      <Box sx={{marginTop:'15px'}}>
      <Typography sx={{fontFamily:'raleway',fontWeight:600,fontSize:'20px'}}>Featured coffee shops</Typography>
      </Box>
      <Box>
        <Typography>lists</Typography>
      </Box>
    </Container>
  );
};

export default ListingContainer;
