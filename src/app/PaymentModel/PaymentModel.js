import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  donate: {
    type: Number,
    required: true,
  },
  transaction: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const PaymentModel =
  mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);

export default PaymentModel;
