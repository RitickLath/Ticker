import { Request, Response, Router } from "express";
import { companyBrief } from "../APIs/CompanyBrief";
import { fetchShareholdingDetails } from "../APIs/Holdings";

const Company = Router();

// API Endpoint: /search/:query
Company.get("/companyBrief/:query", async (req: Request, res: Response) => {
  const query = req.params.query;

  try {
    // Call the company Brief function with the query
    const data = await companyBrief(query);

    // Return the data to the client
    res.json({ success: true, data });
  } catch (error) {
    // Handle errors gracefully
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

export default Company;
