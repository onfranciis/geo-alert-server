import { RequestHandler } from "express";
import Alert from "../models/Alert.model";

export const GetAlert: RequestHandler = async (req, res) => {
  try {
    const result = await Alert.find().select({ __v: 0 }).sort({ date: "desc" });

    return res.send({ error: null, result });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ result: null, error: `Something went wrong!` });
  }
};
