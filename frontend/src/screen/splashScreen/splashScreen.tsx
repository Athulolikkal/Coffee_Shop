import { Box, Container } from "@mui/material";
import AvatarComponet from "../../components/homeScreen/avatarComponent/avatarComponent";
import SearchBarComponent from "../../components/homeScreen/searchBarComponent/searchBarComponent";
import ListingContainer from "../../components/homeScreen/listingContainer.tsx/listingContainer";
import Footer from "../../components/homeScreen/footer/footer";

const SplashScreen = () => {
  return (
    <Container sx={{ margin: 0, padding: 0, height: "100vh",width:'100%' }}>
      {/* header part */}
      <Box>
        <AvatarComponet />
      </Box>
      {/* search bar */}
      <Box>
        <SearchBarComponent />
      </Box>
      {/* listing section */}
      <Box>
        <ListingContainer />
      </Box>
      {/* footer */}
      <Box>
        <Footer />
      </Box>
    </Container>
  );
};

export default SplashScreen;
