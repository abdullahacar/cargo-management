const express = require("express");
const DeliveryDAO = require("../models/delivery.model.js");
const router = express.Router();
const {getDeliveries, getDelivery, createDelivery, updateDelivery, deleteDelivery} = require('../controllers/delivery.controller.js');


router.get('/', getDeliveries);
router.get("/:id", getDelivery);

router.post("/", createDelivery);

// update a delivery
router.put("/:id", updateDelivery);

// delete a delivery
router.delete("/:id", deleteDelivery);




module.exports = router;