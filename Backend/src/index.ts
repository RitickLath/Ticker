import express from "express";
import SearchRouter from "./route/SearchRoute";

const app = express();

app.use("/api/v1" , SearchRouter);

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});

