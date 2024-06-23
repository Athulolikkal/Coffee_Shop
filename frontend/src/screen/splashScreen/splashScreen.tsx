import { Box, } from "@mui/material";
import AvatarComponet from "../../components/splashScreen/avatarComponent/avatarComponent";
import SearchBarComponent from "../../components/splashScreen/searchBarComponent/searchBarComponent";
import ListingContainer from "../../components/splashScreen/listingContainer.tsx/listingContainer";
import Footer from "../../components/splashScreen/footer/footer";

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
