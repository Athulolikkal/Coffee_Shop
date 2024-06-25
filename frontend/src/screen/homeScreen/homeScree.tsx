/* eslint-disable @typescript-eslint/no-explicit-any */

import { Box, Typography } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import MenuCardContainer from "../../components/homeScreen/menuContainer/menuContainer";
import ItemCard from "../../components/homeScreen/itemCard/itemCard";
import { BackButton, CurveBox } from "./style";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useLocation, useNavigate } from "react-router-dom";
import withImageLoader from "../../HOC/withImageLoader";
import ImgComponent from "../../components/imageComponet/imageComponent";
import { useEffect, useState } from "react";
import { IItemDetails, IshopDetails } from "../../type";
import { findAllMenuWithShopId } from "../../api/api";

const WithImageLoader = withImageLoader(ImgComponent)
const HomeScreen = () => {
    const [menuType, setMenuType] = useState<string>('Coffee')
    const [loading, setLoading] = useState<boolean>(false)
    const [menuDetails, setMenuDetails] = useState<IItemDetails[] | []>([])
    const location = useLocation();
    const shopDetails: IshopDetails = location.state || {}
    useEffect(() => {
        setLoading(true)
        if (shopDetails._id) {
            const getShopMenuDetails = async () => {
                const menuDetails: any = await findAllMenuWithShopId(shopDetails._id)
                const menuItems = menuDetails.data
                if (menuItems) { setMenuDetails(menuItems) }
            }
            getShopMenuDetails()
        }
        setLoading(false)
    }, [])

    const navigate = useNavigate()
    return (
        <div style={{ width: '100%', padding: 0 }}>
            <Box sx={{ height: '30vh', position: 'relative', width: '100%' }}>
                <Box sx={{ height: '100%', width: '100%' }}>
                    <WithImageLoader alt="prodImg" src={shopDetails ? shopDetails.image : ''}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Box>
                <BackButton onClick={() => navigate('/coffee')}>
                    <ChevronLeftIcon sx={{ fontSize: '30px' }} />
                </BackButton>
                <CurveBox />
            </Box>
            <Box sx={{ height: '65vh', marginLeft: '47px', marginTop: '8px' }}>
                <Typography sx={{ fontFamily: 'Raleway', fontSize: '23px', color: '#003B40', fontWeight: 600, }}>{shopDetails.name}</Typography>
                <Box sx={{ display: 'flex', marginBottom: '5px' }}>
                    <StarIcon sx={{ fontSize: '20px', color: '#FDCB6E' }} />
                    <Typography sx={{ fontFamily: "Raleway", fontSize: '14px', fontWeight: 600, color: '#003B40' }}>{shopDetails.rating}<span style={{ marginLeft: '5px', color: 'gray', opacity: 0.5 }}>{shopDetails?.review} reviews</span></Typography>
                </Box>
                <Typography sx={{ fontFamily: 'Raleway', fontSize: '14px', color: '#003B40', fontWeight: 600, }}>{shopDetails.location}</Typography>
                {/* menu items */}
                <Box sx={{ marginRight: '47px' }}>
                    <MenuCardContainer setMenuType={setMenuType} />
                </Box>
                {/* dishes */}
                {!loading ? <Box sx={{ overflowY: 'auto', height: '40vh', marginTop: '1rem', scrollbarWidth: 'none', marginRight: '23px' }}>
                    {menuDetails.filter(item => item.category === menuType).length !== 0 ? (
                        menuDetails.filter(item => item.category === menuType).map((item, index) => (
                            <ItemCard key={`${item.category}-${index}`} itemInfo={item} />
                        ))
                    ) : (
                        <Typography sx={{ textAlign: 'center', marginTop: '2rem', fontFamily: 'Raleway', fontSize: '14px', color: '#003B40', fontWeight: 600, }}>No items found</Typography>
                    )}
                </Box> : <Box>
                    <Typography sx={{ textAlign: 'center', marginTop: '2rem', fontFamily: 'Raleway', fontSize: '14px', color: '#003B40', fontWeight: 600, }}>Loading...</Typography>
                </Box>}
            </Box>
        </div>
    )
}

export default HomeScreen