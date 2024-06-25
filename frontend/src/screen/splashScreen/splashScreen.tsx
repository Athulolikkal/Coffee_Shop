/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, } from "@mui/material";
import AvatarComponet from "../../components/splashScreen/avatarComponent/avatarComponent";
import SearchBarComponent from "../../components/splashScreen/searchBarComponent/searchBarComponent";
import ListingContainer from "../../components/splashScreen/listingContainer.tsx/listingContainer";
import Footer from "../../components/splashScreen/footer/footer";
import { useLocation, useNavigate } from "react-router-dom";
import { IshopDetails } from "../../type";
import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [details, setDetails] = useState<IshopDetails[]|[]>([])
  const [loading,setLoading]=useState<boolean>(false)
  const location = useLocation();
  const navigate = useNavigate();
  const shopDetails: IshopDetails[] = location.state || [];
  useEffect(() => {
    if (shopDetails.length === 0) {
      navigate('/')
    } else {
      setDetails(shopDetails)
    }
  }, [])


  return (
    <Box sx={{ width: '100%' }}>
      {/* header part */}
      <AvatarComponet />
      {/* search bar */}
      <SearchBarComponent  setDetails={setDetails} setLoading={setLoading}/>
      {/* listing section */}
      <ListingContainer shopDetails={details} loading={loading}/>
      {/* footer */}
      <Footer />
    </Box>
  );
};

export default SplashScreen;
