const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
    {
        city: {
            type: String,
            required: [true, "City is required !"],
        },

        country: {
            type: String,
            required: [true, "Country is required"],
            default: 0,
        }
    },
    {
        timestamps: true,
    }
);

const ImsSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "First Name is required !"],
        },
        lastName: {
            type: String,
            required: [true, "Last Name is required !"],
        },
        address: {
            type : AddressSchema,
            required: [true, "Address is required !"]
        }
    },
    {
        timestamps: true,
    }
);

const DeliverySchema = new mongoose.Schema(
    {
        deliveryNumber: {
            type: String,
            required: [true, "Delivery Number is required !"],
        },

        consignor: {
            type: ImsSchema,
            required: [true, "Consignor is required !"]
        },
        consignee: {
            type: ImsSchema,
            required: [true, "Consignee is required !"]
        },
        itemQuantity: {
            type: Number,
            required: true,
            default: 0,
        }
    },
    {
        timestamps: true,
    }
);


const DeliveryDAO = mongoose.model("Delivery", DeliverySchema);
// const ImsDAO = mongoose.model("Ims", ImsSchema);

module.exports = DeliveryDAO;