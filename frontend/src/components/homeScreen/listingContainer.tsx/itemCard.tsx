/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Card, IconButton, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

const ItemCard: React.FC<any> = ({ item }) => {
    const [likedCoffee, setLikedCoffee] = useState<boolean>(false)
    return (
        <Box sx={{ position: 'relative', cursor: 'pointer' }}>
            <Card sx={{ width: '160px', marginTop: '10px', backgroundColor: 'white', borderRadius: '20px', boxShadow: 0 }}>
                {/* Image Container Box */}
                <Box sx={{ height: '150px', borderRadius: '30px', overflow: 'hidden' }}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtlDheJZ5eLJMAzbiblEQWf7FrOIllGV4MA&s"
                        alt={`Coffee shop ${item}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
                    />
                </Box>
                <Typography sx={{ marginLeft: '10px', marginTop: '10px', fontFamily: "Raleway", fontSize: '16px', fontWeight: 700, color: '#003B40' }}>{item}</Typography>
                {/* Rating and Review */}
                <Box sx={{ display: 'flex', marginLeft: '10px' }}>
                    <StarIcon sx={{ fontSize: '20px', color: '#FDCB6E' }} />
                    <Typography sx={{ fontFamily: "Raleway", fontSize: '14px', fontWeight: 600, color: '#003B40' }}>4.5<span style={{ marginLeft: '5px', color: 'gray', opacity: 0.5 }}>1200 reviews</span></Typography>
                </Box>
                <Typography sx={{ marginLeft: '10px', marginBottom: '10px', fontFamily: "Raleway", fontSize: '14px', fontWeight: 600, color: '#003B40' }}>3.8 miles</Typography>

            </Card>
            {/* Favorite Icon */}
            <Box sx={{ position: 'absolute', top: '0px', right: '2px', backgroundColor: 'white', borderRadius: '20px' }}>
                <IconButton sx={{ backgroundColor: 'white' }} onClick={() => setLikedCoffee(!likedCoffee)}>
                    {likedCoffee ? <FavoriteIcon sx={{ color: '#003B40' }} /> : <FavoriteBorderOutlinedIcon />}
                </IconButton>
            </Box>
        </Box>

    )
}

export default ItemCard