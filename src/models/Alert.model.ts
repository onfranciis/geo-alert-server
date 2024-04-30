import { model, Schema } from "mongoose";

const AlertSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  longitude: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
});

const Alert = model("Alert", AlertSchema);

export default Alert;
