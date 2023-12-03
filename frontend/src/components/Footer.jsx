import { Grid, Typography, Button } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <div>
        <Grid className='bg-black text-white text-center mt-10 bottom-0 left-0 right-0 relative' container sx={{bgColor: "black", color: "white", py: 3}}>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Company</Typography>
                <div>
                    <Button className='pb-5' variant='h6' gutterbottom="true">About</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6' gutterbottom="true">Blog</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6' gutterbottom="true">Press</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6' gutterbottom="true">Jobs</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6' gutterbottom="true">Partners</Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Solutions</Typography>
                <div>
                    <Button className='pb-5' variant='h6' gutterbottom="true">Marketing</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6' gutterbottom="true">Analytics</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6' gutterbottom="true">Commerce</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6' gutterbottom="true">Insights</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6' gutterbottom="true">Support</Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Documentation</Typography>
                <div>
                    <Button className='pb-5' variant='h6' gutterbottom="true">Guides</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6' gutterbottom="true">API status</Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Legal</Typography>
                <div>
                    <Button className='pb-5' variant='h6' gutterbottom="true">Claim</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6' gutterbottom="true">Privacy</Button>
                </div>
                <div>
                    <Button className='pb-5' variant='h6' gutterbottom="true">Terms</Button>
                </div>
            </Grid>
            <Grid className='pt-20' item xs={12}>
                <Typography variant='body2' component="p" align="center">
                    &copy; 2023   All rights reserved
                </Typography>
            </Grid>
        </Grid>
    </div>
  )
}

export default Footer;