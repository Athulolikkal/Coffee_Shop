import { Box, styled } from "@mui/material";

export const CurveBox = styled(Box)(() => ({
  height: "35px",
  position: "absolute",
  backgroundColor: "white",
  top: "90%",
  left: 0,
  right: 0,
  borderTopRightRadius: "40px",
  borderTopLeftRadius: "40px",
}));

export const BackButton = styled(Box)(() => ({
  height: "36px",
  width: "36px",
  position: "absolute",
  borderRadius: "10px",
  top:'10%',
  bottom:'0px',
  left:'5%',
  backgroundColor:'white',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  cursor:'pointer'
}));
