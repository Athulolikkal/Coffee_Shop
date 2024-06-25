import { Box, Container, } from "@mui/material";
import {
  Search,
  SearchButton,
  SearchIconWrapper,
  StyledInputBase,
} from "./style";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/TuneSharp";
import { IshopDetails } from "../../../type";
import { getShopDetailsByName } from "../../../api/api";

interface Props {
  setDetails: React.Dispatch<React.SetStateAction<[] | IshopDetails[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}
const SearchBarComponent: React.FC<Props> = ({ setDetails, setLoading }) => {
  const onSearch = async (searchValue: string) => {
    setLoading(true)
    const newDetailsResp = await getShopDetailsByName(searchValue)
    setDetails(newDetailsResp)
    setLoading(false)
  }
  return (
    <Container
      sx={{
        marginTop: "25px",
        display: "flex",
      }}
    >
      {/* search box */}
      <Box sx={{ width: '80%', }}>
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
              color: '#003B40',
            }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => onSearch(e.target.value)}
          />
        </Search>
      </Box>
      {/* icon button section */}
      <SearchButton >
        <TuneIcon sx={{ color: "white" }} />
      </SearchButton>
    </Container>
  );
};

export default SearchBarComponent;
