import { Typography } from "@mui/material"
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import { ItemBox } from "./style";
import { useState } from "react";

const MenuCardContainer = () => {
  const [selectedMenu, setMenu] = useState<number>(0)
  const menuItems = [{ icn: CoffeeIcon, title: 'Coffee' }, { icn: LocalDrinkIcon, title: 'Drinks' }, { icn: BakeryDiningIcon, title: 'Food' }]
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
      {menuItems.map((Item, index) => (
        <ItemBox sx={{ backgroundColor: selectedMenu === index ? '#EDF0EF' : '' }} onClick={() => setMenu(index)}>
          <Item.icn sx={{ color: selectedMenu === index ? "#003B40" : '#B7C1C2', transition: "all 0.3s ease", }} />
          <Typography sx={{ fontSize: '18px', color: selectedMenu === index ? "#003B40" : '#B7C1C2', fontWeight: 600, fontFamily: 'Raleway', transition: "all 0.3s ease", }}>{Item.title}</Typography>
        </ItemBox>
      ))
      }
    </div>
  )
}

export default MenuCardContainer