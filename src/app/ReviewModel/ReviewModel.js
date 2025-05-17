import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  comment: {
    type: Array,
    default: [],
  },
});

const ReviewModel =
  mongoose.models.Review || mongoose.model("Review", ReviewSchema);

export default ReviewModel;
