import mongoose from "mongoose";

const IsraelSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
});

const IsraelModel =
  mongoose.models.Israel || mongoose.model("Israel", IsraelSchema);
export default IsraelModel;
