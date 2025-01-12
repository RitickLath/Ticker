import express from "express";
import SearchRouter from "./route/SearchRoute";
import cors from "cors";
import Company from "./route/CompanyRoute";
import scrap from "./route/htmlscrap";

const app = express();

app.use(cors());

app.use("/api/v1", SearchRouter);
app.use("/api/v1", Company);
app.use("/api/v1", scrap);

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
