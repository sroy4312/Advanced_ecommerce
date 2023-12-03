import { Button, Grid, Box, TextField } from '@mui/material';
import React from 'react';
import AddressCard from '../components/AddressCard';

const DeliveryAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget)
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      address: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zip: data.get("zip"),
      phoneNumber: data.get("phoneNumber")
    }
    console.log("Address", address);
  }
  return (
    <div className=''>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className='border rounded-md shadow-md h-[30.5rem] overflow-y-scroll'>
          <div className='p-5 py-7 border-b cursor-pointer'>
            <AddressCard />
            <Button sx={{mt: 2, bgcolor: "RGB(145 85 253)"}} size="large" variant="contained">Deliver here</Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-md shadow-md p-4">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField required id="firstname" name="firstName" label="First name" fullWidth autoComplete='given-name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id="lastname" name="lastName" label="Last name" fullWidth autoComplete='given-name' />
                </Grid>
                <Grid item xs={12}>
                  <TextField required id="address" name="address" label="Address" fullWidth autoComplete='given-name' multiline rows={4} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id="city" name="city" label="City" fullWidth autoComplete='given-name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id="state" name="state" label="State/Province/Region" fullWidth autoComplete='given-name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id="zip" name="zip" label="Zip/Postal code" fullWidth autoComplete='Shipping postal code' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id="phoneNumber" name="phoneNumber" label="Phone number" fullWidth autoComplete='mobile number' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145 85 253)"}} size="large" variant="contained" type='submit'>Deliver here</Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default DeliveryAddressForm;