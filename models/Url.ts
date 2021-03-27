import mongoose, { Schema } from "mongoose";

const LinkSchema = new mongoose.Schema({
  linkCode: {
    type: String,
  },
  longURL: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

export default mongoose.model("url", LinkSchema);
