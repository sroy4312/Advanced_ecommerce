import { Button, IconButton } from '@mui/material';
import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className='flex items-center'>
        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
            <img className='w-full h-full object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
        </div>
        <div className='ml-5 space-y-1'>
            <p className='font-semibold'>Men Printed Pure Cotton Straight Kurta</p>
            <p className='opacity-70'>Size: L, white</p>
            <p className='opacity-70 mt-2'>Seller: Majestic Man</p>
            <div className="flex space-x-5 items-center text-gray-900 pt-6">
                <p className="font-semibold">&#8377; 199</p>
                <p className="opacity-50 line-through">&#8377; 211</p>
                <p className="font-bold text-green-700">5% OFF</p>
            </div>
        </div>
      </div>
      <div className='lg:flex items-center lg:space-x-10 pt-4 justify-between'>
            <div className='flex items-center space-x-2'>
                <IconButton>
                    <RemoveCircleOutlineIcon />
                </IconButton>
                <span className='py-1 px-7 border rounded-sm'>1</span>
                <IconButton sx={{color: "#007FEF"}}>
                    <AddCircleOutlineIcon />
                </IconButton>
            </div>
            <div>
                <Button><DeleteOutlineIcon style={{color: '#007FEF'}} /></Button>
            </div>
        </div>
    </div>
  )
}

export default CartItem;