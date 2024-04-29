import { config } from "dotenv";

config();

export default {
  port: process.env.PORT || 1234,
  dbUrl: process.env.DB_URL || "",
};
