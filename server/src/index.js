import dotenv from "dotenv";
import connectDB from "./DB/db.js";
import { app } from "./app.js";

//* Configurations
dotenv.config({
  path: "./env",
});

//* Connect DB 
const port = process.env.PORT || 3000;
connectDB()
  .then(() => {
    app.listen(port, () => console.log(`server is listening at port ${port}`));
  })
  .catch((err) => {
    console.log(`${err.message} did not connect!`);
  });
