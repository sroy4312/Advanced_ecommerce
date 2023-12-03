import React from 'react';
import CartItem from '../components/CartItem';
import { Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  }

  return (
    <div className='pt-10'>
      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>
          {[1, 1, 1, 1].map((item) => <CartItem />)}
        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border p-7'>
                <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                <Divider />
                <div className='space-y-3 font-semibold'>
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Price</span>
                        <span>&#8377; 4697</span>
                    </div>
                    <div className='flex justify-between pt-3'>
                        <span>Discount</span>
                        <span className='text-green-700'>- &#8377; 4499</span>
                    </div>
                    <div className='flex justify-between pt-3'>
                        <span>Delivery charge</span>
                        <span className='text-green-700'>Free</span>
                    </div>
                    <div className='flex justify-between pt-3 font-bold'>
                        <span>Total amount</span>
                        <span className='text-green-700'>&#8377; 1278</span>
                    </div>
                </div>
                <Divider className='pt-7' />
                <Button onClick={handleCheckout} variant='contained' fullWidth sx={{px: "2.5rem", py: "0.7rem", bgcolor: "#9155FD", marginTop: "1rem"}}>Checkout</Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;