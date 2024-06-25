import { Box, Grid, Typography } from "@mui/material";
import ItemCard from "./itemCard";
import { IshopDetails } from "../../../type";

interface Props {
  shopDetails: IshopDetails[],
  loading: boolean
}

const ListingContainer: React.FC<Props> = ({ shopDetails, loading }) => {
  return (
    <div style={{ marginLeft: "23px", padding: 0, width: '90%' }}>
      <Typography variant="body1" sx={{ fontFamily: 'raleway', fontWeight: 600, fontSize: '20px', marginTop: '10px', color: '#003B40' }}>Featured coffee shops</Typography>
      <Box sx={{ width: '100%', height: '50vh', overflowY: 'auto', padding: '10px', scrollbarWidth: 'none' }}>
        {loading ? <Typography variant="body1" sx={{ fontFamily: 'raleway', fontWeight: 600, fontSize: '14px', marginTop: '5rem', color: '#003B40', textAlign: 'center' }}>loading...</Typography>
          : shopDetails.length > 0 ? <Grid container spacing={2}>
            {shopDetails.map((item, index) => (
              <Grid item xs={6} md={6} sx={{ marginTop: index % 2 !== 0 ? '30px' : '5px', position: 'relative' }} key={index}>
                <ItemCard item={item} />
              </Grid>
            ))}
          </Grid>
            :
            <Typography variant="body1" sx={{ fontFamily: 'raleway', fontWeight: 600, fontSize: '14px', marginTop: '5rem', color: '#003B40', textAlign: 'center' }}>No Search Item Found</Typography>
        }
      </Box>
    </div>
  );
};

export default ListingContainer;
