import React from "react";
import AddressCard from "../components/AddressCard";
import OrderTracker from "../components/OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const OrderDetailsPage = () => {
  return (
    <div className="pt-10 px-5 lg:px-20 space-y-7">
      <div className="shadow-md border px-5 py-3">
        <h1 className="font-bold text-lg pb-4">Delivery address</h1>
        <AddressCard />
      </div>
      <div className="py-10 shadow-md border">
        <OrderTracker activeStep={2} />
      </div>
      <Grid container className="space-y-5">
        {[1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item sx={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/i/v/x/xxl-br-ad-kt-105-adwyn-peter-original-imagj4zyd2q7t6cg.jpeg?q=70"
                  alt=""
                />
                <div className="space-y-1 ml-4">
                  <p className="font-semibold">
                    Men Solid Pure Cotton Straight Kurta
                  </p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color: White</span>
                    <span>Size: M</span>
                  </p>
                  <p>Seller: Linaria</p>
                  <p>&#8377; 1099</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarOutlineIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <span>Rate and review product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetailsPage;
