const orderService = require('../services/order.services.js');


const createOrder = async(req, res) => {
    const user = await req.user;
    try {
        let createdOrder = await orderService.createOrder(user, req.body);
        return res.status(201).send(createdOrder);
    } catch (err) {
        return res.status(500).send({error: err.message});
    }
}

const findOrderById = async(req, res) => {
    const user = await req.user;
    try {
        let foundOrder = await orderService.findOrderById(req.params.id);
        return res.status(201).send(foundOrder);
    } catch (err) {
        return res.status(500).send({error: err.message});
    }
}

const orderHistory = async(req, res) => {
    const user = await req.user;
    try {
        let history = await orderService.usersOrderHistory(user._id);
        return res.status(201).send(history);
    } catch (err) {
        return res.status(500).send({error: err.message});
    }
}

module.exports = { createOrder, findOrderById, orderHistory };