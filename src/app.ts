import express, { urlencoded } from "express";
import { AddAlert } from "./controllers/AddAlert.controller";
import { GetAlert } from "./controllers/GetAlert.controller";

export const app = express();
app.use(urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.send({ connected: true });
});

app.get("/alert", GetAlert);
app.post("/alert", AddAlert);

app.all("*", (_, res) => {
  res.status(404).send({
    result: null,
    error: "Invalid route!",
  });
});
