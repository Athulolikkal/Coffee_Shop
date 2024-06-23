import { Box, styled } from "@mui/material";

export const TextBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  fontFamily: "Raleway",
  marginLeft: "15px",
  width: "100%",
  color: "#003B40",
}));

export const AddButton = styled(Box)(() => ({
  backgroundColor: "#003B40",
  width: "30px",
  height: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100%",
  position:'absolute',
  top:'0%',
  right:'0px',
  left:'91%',
  bottom:'0%',
  cursor:'pointer'
}));
