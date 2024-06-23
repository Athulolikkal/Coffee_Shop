import { Box, InputBase, styled } from "@mui/material";

export const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  display: "flex",
  alignItems: "center",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    "&::placeholder": {
      color: "#A4ADAE",
      opacity: 1,
    },
  },
}));

export const Search = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  height: "56px",
  backgroundColor: "#EDF0EF",
  "&:hover": {
    backgroundColor: "#E6E9E8",
  },
  marginRight: 0,
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    width: "100%",
  },
}));

export const SearchButton = styled(Box)(() => ({
  borderRadius: "20px",
  width: "58px",
  height: "58px",
  backgroundColor: "#003B40",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "10px",
  cursor: "pointer",
}));
