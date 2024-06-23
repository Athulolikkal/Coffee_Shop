import { Box, styled } from "@mui/material";

export const ItemBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  height: "100px",
  borderRadius: "27px",
  alignItems: "center",
  padding: "20px",
  transition: "all 0.3s ease",
  cursor: "pointer",
}));
