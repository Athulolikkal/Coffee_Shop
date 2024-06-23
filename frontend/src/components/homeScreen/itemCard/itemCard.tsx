/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from '@mui/material'
import React from 'react'
import { AddButton, TextBox } from './style'
import AddIcon from '@mui/icons-material/Add';

const ItemCard: React.FC<any> = ({ itemInfo }) => {
    return (
        <div style={{ position: 'relative' }}>
            <Box sx={{ display: 'flex', backgroundColor: '#EDF0EF', padding: '20px', borderRadius: '20px', marginBottom: '15px', marginTop: '10px' }}>
                {/*item image  */}
                <Box sx={{ width: '90px', height: '105px' }}>
                    <img alt='itemImg' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '17px' }} src={itemInfo.image} />
                </Box>
                {/* item texts */}
                <TextBox>
                    <Typography sx={{ fontFamily: 'Raleway', fontSize: '16px', fontWeight: 700, marginBottom: '5px' }}>{itemInfo.itemName}</Typography>
                    <Typography sx={{ fontFamily: 'Raleway', fontSize: '14px', fontWeight: 400, marginBottom: '5px' }}>{itemInfo.description}</Typography>
                    <Typography sx={{ fontFamily: 'Raleway', fontSize: '14px', fontWeight: 600 }}>${itemInfo.rate}</Typography>
                </TextBox>
            </Box>
            {/* add button */}
            <AddButton>
                <AddIcon sx={{ color: 'white' }} />
            </AddButton>


        </div>
    )
}

export default ItemCard