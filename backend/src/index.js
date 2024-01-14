const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const authRouters = require('./routes/auth.route.js');
const userRouters = require('./routes/user.route.js');
const productRouters = require('./routes/product.route.js');
const adminProductRouters = require('./routes/admin.product.route.js');
const cartRouters = require('./routes/cart.route.js');
const cartItemRouters = require('./routes/cartItem.route.js');
const orderRouters = require('./routes/order.route.js');
const reviewRouters = require('./routes/review.route.js');
const ratingRouters = require('./routes/rating.route.js');
const adminOrderRouters = require('./routes/admin.order.route.js')

const app = express();


app.use(express.json())

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
        'Content-Type'
    ]
};

app.use(cors(corsOptions))

app.use("/auth", authRouters);
app.use("/api/users", userRouters);
app.use("/api/products", productRouters);
app.use("/api/admin/products", adminProductRouters);
app.use("/api/cart", cartRouters);
app.use("/api/cart_items", cartItemRouters);
app.use("/api/orders", orderRouters);
app.use("/api/reviews", reviewRouters);
app.use("/api/ratings", ratingRouters);
app.use("/api/admin/orders", adminOrderRouters);


dotenv.config()

module.exports = app;