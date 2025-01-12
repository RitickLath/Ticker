import express from "express";
import SearchRouter from "./route/SearchRoute";
import cors from "cors";
import Company from "./route/CompanyRoute";

const app = express();

app.use(cors());

app.use("/api/v1", SearchRouter);
app.use("/api/v1", Company);

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
