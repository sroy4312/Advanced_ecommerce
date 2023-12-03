import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Homepage from '../pages/Homepage';
import Productpage from '../pages/Productpage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import Cart from '../pages/Cart';
import Checkoutpage from '../pages/Checkoutpage';
import Orderpage from '../pages/Orderpage';
import OrderDetailsPage from '../pages/OrderDetailsPage';
import Footer from '../components/Footer';

const CustomerRouter = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/:level1/:level2/:level3' element={<Productpage />} />
        <Route path='/product/:productId' element={<ProductDetailsPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkoutpage />} />
        <Route path='/account/order' element={<Orderpage />} />
        <Route path='/account/order/:orderId' element={<OrderDetailsPage />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default CustomerRouter;