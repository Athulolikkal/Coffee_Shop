import { Avatar,Typography } from "@mui/material";
import { AvatarWrapBox, TitleWrapBox } from "./style";


const AvatarComponet = () => {
  return (
    <div style={{ marginLeft: "23px", padding: 0, }}>
      <AvatarWrapBox>
        <Avatar
          alt="userImg"
          sx={{ width: "50px", height: "50px" }}
          src="https://as1.ftcdn.net/v2/jpg/04/66/47/56/1000_F_466475672_vMHZN7YSAxbDU9xxygsBOZ2S57zDAUv7.jpg"
        />
      </AvatarWrapBox>
      <TitleWrapBox>
        <Typography
          sx={{
            fontSize: "25px",
            lineHeight: "29.35px",
            fontFamily: "Raleway",
            fontWeight: 600,
            color: "#003B40",
          }}
        >
          Find a coffee shope anywhere
        </Typography>
      </TitleWrapBox>
    </div>
  );
};

export default AvatarComponet;
