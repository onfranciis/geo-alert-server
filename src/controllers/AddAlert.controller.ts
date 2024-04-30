import { RequestHandler } from "express";
import { AddAlertValidator } from "../utils/AddAlertValidator.util";
import Alert from "../models/Alert.model";

export const AddAlert: RequestHandler = async (req, res) => {
  try {
    const body = req.body;

    AddAlertValidator(body)
      .then(async (form) => {
        const result = await Alert.create({
          message: form.message,
          longitude: form.longitude,
          latitude: form.latitude,
        });

        result["__v"] = undefined;

        return res.send({ error: null, result });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).send({ result: null, error: err });
      });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ result: null, error: `Something went wrong!` });
  }
};
