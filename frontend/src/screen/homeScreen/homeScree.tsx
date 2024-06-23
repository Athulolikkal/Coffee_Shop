
import { Box, Typography } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import MenuCardContainer from "../../components/homeScreen/menuContainer/menuContainer";
import ItemCard from "../../components/homeScreen/itemCard/itemCard";
import { BackButton, CurveBox } from "./style";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from "react-router-dom";
import withImageLoader from "../../HOC/withImageLoader";
import ImgComponent from "../../components/imageComponet/imageComponent";
import { useState } from "react";

const WithImageLoader = withImageLoader(ImgComponent)
const HomeScreen = () => {
    const [menuType, setMenuType] = useState<string>('Coffee')
    const dishItem = [
        { itemName: 'Cafe mocha', description: 'A chocolate-flavored warm beverage that is a of a cafe latte', rate: '3.00', category: 'Coffee', image: 'https://images.pexels.com/photos/885021/pexels-photo-885021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { itemName: 'Caramel machiatto', description: 'Steamed milk marked with an espresso and chocolate', rate: '4.00', category: 'Drinks', image: 'https://images.unsplash.com/photo-1578314674306-5f52904e35bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
    ]
    const navigate = useNavigate()
    return (
        <div style={{ width: '100%', padding: 0 }}>
            <Box sx={{ height: '30vh', position: 'relative', width: '100%' }}>
                <Box sx={{ height: '100%', width: '100%' }}>
                    <WithImageLoader alt="prodImg" src="https://images.unsplash.com/photo-1543233604-3baca4d35513?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwY3VwfGVufDB8fDB8fHww"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Box>
                <BackButton onClick={() => navigate('/coffee')}>
                    <ChevronLeftIcon sx={{ fontSize: '30px' }} />
                </BackButton>
                <CurveBox />
            </Box>
            <Box sx={{ height: '65vh', marginLeft: '47px', marginTop: '8px' }}>
                <Typography sx={{ fontFamily: 'Raleway', fontSize: '23px', color: '#003B40', fontWeight: 600, }}>Haus Coffee</Typography>
                <Box sx={{ display: 'flex', marginBottom: '5px' }}>
                    <StarIcon sx={{ fontSize: '20px', color: '#FDCB6E' }} />
                    <Typography sx={{ fontFamily: "Raleway", fontSize: '14px', fontWeight: 600, color: '#003B40' }}>4.5<span style={{ marginLeft: '5px', color: 'gray', opacity: 0.5 }}>1200 reviews</span></Typography>
                </Box>
                <Typography sx={{ fontFamily: 'Raleway', fontSize: '14px', color: '#003B40', fontWeight: 600, }}>San Francisco, CA</Typography>
                {/* menu items */}
                <Box sx={{ marginRight: '47px' }}>
                    <MenuCardContainer setMenuType={setMenuType} />
                </Box>
                {/* dishes */}
                <Box sx={{ overflowY: 'auto', height: '40vh', marginTop: '1rem', scrollbarWidth: 'none', marginRight: '23px' }}>
                    {dishItem.filter(item => item.category === menuType).length !== 0 ? (
                        dishItem.filter(item => item.category === menuType).map((item, index) => (
                            <ItemCard key={`${item.category}-${index}`} itemInfo={item} />
                        ))
                    ) : (
                        <Typography sx={{ textAlign: 'center', marginTop: '2rem', fontFamily: 'Raleway', fontSize: '14px', color: '#003B40', fontWeight: 600, }}>No items found</Typography>
                    )}
                </Box>
            </Box>
        </div>
    )
}

export default HomeScreen