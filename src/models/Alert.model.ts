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
  location: {
    type: String,
    required: true,
  },
});

const Alert = model("Alert", AlertSchema);

export default Alert;
