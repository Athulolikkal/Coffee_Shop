import { Box, Grid, Typography } from "@mui/material";
import ItemCard from "./itemCard";

const ListingContainer = () => {
  const listOfItem = ['Home Coffee Roasters', 'Haus Coffee', 'Sanctuary Coffee', 'Blueberry Cafe', 'Cafe Buzzybee', 'Aristocrat Cafe', 'Cornerstone coffeehouse'];
  return (
    <div style={{ marginLeft: "23px", padding: 0, width: '90%' }}>
      <Typography variant="body1" sx={{ fontFamily: 'raleway', fontWeight: 600, fontSize: '20px', marginTop: '10px', color: '#003B40' }}>Featured coffee shops</Typography>
      <Box sx={{ width: '100%', height: '50vh', overflowY: 'auto', padding: '10px', scrollbarWidth: 'none' }}>
        <Grid container spacing={2}>
          {listOfItem.map((item, index) => (
            <Grid item xs={6} md={6} sx={{ marginTop: index % 2 !== 0 ? '30px' : '5px', position: 'relative' }} key={index}>
              <ItemCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ListingContainer;
