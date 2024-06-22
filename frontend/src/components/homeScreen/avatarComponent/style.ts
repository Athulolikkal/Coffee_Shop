import { Box, styled } from "@mui/material";

export const AvatarWrapBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  paddingTop: "52px",
  marginLeft: "294px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "294px",
  },
}));
export const TitleWrapBox = styled(Box)(() => ({
  width: "250px",
}));
