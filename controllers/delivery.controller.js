const DeliveryDAO = require("../models/delivery.model");

const getDeliveries = async (req, res) => {
  try {
    const deliveries = await DeliveryDAO.find({});
    res.status(200).json(deliveries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDelivery = async (req, res) => {
  try {
    const { id } = req.params;
    const delivery = await DeliveryDAO.findById(id);
    res.status(200).json(delivery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createDelivery = async (req, res) => {
  try {
    const delivery = await DeliveryDAO.create(req.body);
    res.status(200).json(delivery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDelivery = async (req, res) => {
  try {
    const { id } = req.params;

    const delivery = await DeliveryDAO.findByIdAndUpdate(id, req.body);

    if (!delivery) {
      return res.status(404).json({ message: "Delivery not found !" });
    }

    const updatedDelivery = await DeliveryDAO.findById(id);
    res.status(200).json(updatedDelivery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDelivery = async (req, res) => {
  try {
    const { id } = req.params;

    const delivery = await DeliveryDAO.findByIdAndDelete(id);

    if (!delivery) {
      return res.status(404).json({ message: "Delivery not found !" });
    }

    res.status(200).json({ message: "Delivery deleted successfully !" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDeliveries,
  getDelivery,
  createDelivery,
  updateDelivery,
  deleteDelivery,
};
