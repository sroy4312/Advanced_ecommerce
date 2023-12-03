import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "../components/OrderCard";

const orderStatus = [
  {
    label: "On the way",
    value: "on_the_way",
  },
  {
    label: "Delivered",
    value: "delivered",
  },
  {
    label: "Cancelled",
    value: "cancelled",
  },
  {
    label: "Returned",
    value: "return",
  },
];

const Orderpage = () => {
  return (
    <div className="pt-10 px-5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="uppercase font-semibold">Order status</h1>
              {orderStatus.map((item) => (
                <div className="flex items-center">
                  <input
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    defaultValue={item.value}
                    type="checkbox"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={item.value}
                  >
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9} className="space-y-5">
            {
                [1, 1, 1, 1, 1].map((item) => <OrderCard />)
            }
        </Grid>
      </Grid>
    </div>
  );
};

export default Orderpage;
