const orderService = require('../services/order.services.js');


const getAllOrders = async(req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        return res.status(200).send(orders);
    } catch (err) {
        res.status(500).send({error: err.message});
    }
}

const confirmOrder = async(req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.confirmOrder(orderId);
        return res.status(200).send(orders);
    } catch (err) {
        res.status(500).send({error: err.message});
    }
}

const shipOrder = async(req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.shipOrder(orderId);
        return res.status(200).send(orders);
    } catch (err) {
        res.status(500).send({error: err.message});
    }
}

const deliverOrder = async(req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.deliverOrder(orderId);
        return res.status(200).send(orders);
    } catch (err) {
        res.status(500).send({error: err.message});
    }
}

const cancellledOrder = async(req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.cancelOrder(orderId);
        return res.status(200).send(orders);
    } catch (err) {
        res.status(500).send({error: err.message});
    }
}

const deleteOrder = async(req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.deleteOrder(orderId);
        return res.status(200).send(orders);
    } catch (err) {
        res.status(500).send({error: err.message});
    }
}

module.exports = { getAllOrders, confirmOrder, shipOrder, deliverOrder, cancellledOrder, deleteOrder };