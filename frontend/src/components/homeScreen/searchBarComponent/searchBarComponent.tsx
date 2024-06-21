import { Box, Container, Typography, IconButton } from "@mui/material";
import {
  Search,
  SearchButton,
  SearchIconWrapper,
  StyledInputBase,
} from "./style";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/TuneSharp";

const SearchBarComponent = () => {
  return (
    <Container
      sx={{
        marginTop: "25px",
        display: "flex",
      }}
    >
      {/* search box */}
      <Box sx={{width:'80%',}}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "#A4ADAE" }} />
          </SearchIconWrapper>
          <StyledInputBase
            sx={{
              alignContent: "center",
              height: "100%",
              fontFamily: "Raleway",
              fontSize: "16px",
              fontWeight: 600,
            }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>
      {/* icon button section */}
      <SearchButton>
        <TuneIcon sx={{ color: "white" }} />
      </SearchButton>
    </Container>
  );
};

export default SearchBarComponent;
