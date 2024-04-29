import { connect } from "mongoose";
import { app } from "./app";
import config from "./config";

if (Object.values(config).includes("")) {
  console.error(`It seems like your environment variables are not complete.\n\
  Kindly check and restart the server.`);
  process.exit(1);
} else {
  connect(config.dbUrl)
    .then(() => {
      app.listen(config.port, () => {
        console.log(`Server has started running on port ${config.port} ...`);
      });
    })
    .catch((err) => {
      console.log(`Something went wrong\n`, err);
    });
}
