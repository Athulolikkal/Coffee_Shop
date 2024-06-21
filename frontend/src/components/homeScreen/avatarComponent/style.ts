import { Box, styled } from "@mui/material";

export const AvatarWrapBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  paddingTop: "52px",
  marginLeft: "50%",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "294px",
  },
}));
export const TitleWrapBox = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    width: "250px",
  },
}));
