import express from "express";
import SearchRouter from "./route/SearchRoute";
import cors from "cors";

const app = express();

app.use(cors());

app.use("/api/v1", SearchRouter);

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
