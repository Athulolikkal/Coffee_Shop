import { Box, } from "@mui/material";
import AvatarComponet from "../../components/homeScreen/avatarComponent/avatarComponent";
import SearchBarComponent from "../../components/homeScreen/searchBarComponent/searchBarComponent";
import ListingContainer from "../../components/homeScreen/listingContainer.tsx/listingContainer";
import Footer from "../../components/homeScreen/footer/footer";

const SplashScreen = () => {
  return (
    <Box sx={{ width: '100%' }}>
      {/* header part */}
      <AvatarComponet />
      {/* search bar */}
      <SearchBarComponent />
      {/* listing section */}
      <ListingContainer />
      {/* footer */}
      <Footer />
    </Box>
  );
};

export default SplashScreen;
