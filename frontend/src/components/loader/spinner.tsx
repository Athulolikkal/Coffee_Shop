

import { Typography } from "@mui/material";
import { CSSProperties, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GridLoader } from "react-spinners";
import { getAllShopDetails } from "../../api/api";


const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

function Spinner() {
    const navigate = useNavigate()
    useEffect(() => {
        const fetchAllShops = async () => {
            const allDetails = await getAllShopDetails()
            navigate('/coffee', {state:allDetails})
        }
        fetchAllShops()
    }, []);


    return (
        <div className="sweet-loading" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <GridLoader
                color={'#003B40'}
                loading={true}
                cssOverride={override}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <Typography
                sx={{
                    fontSize: "20px",
                    lineHeight: "29.35px",
                    fontFamily: "Raleway",
                    fontWeight: 600,
                    color: "#003B40",
                    marginTop: '10px'
                }}
            >
                find your coffee
            </Typography>

        </div>
    );
}

export default Spinner;