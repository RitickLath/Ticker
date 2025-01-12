import { Request, Response } from "express";
import { companyFundamental } from "../APIs/CompanyFundamental";

export const getCompanyFundamental = async (req: Request, res: Response) => {
  const { fincode } = req.params;

  try {
    if (!fincode) {
      res.status(400).json({
        success: false,
        message: "Missing required parameter: fincode.",
      });
      return;
    }

    const data = await companyFundamental(parseInt(fincode));
    res.json({ success: true, data });
  } catch (error) {
    console.error("Error fetching company fundamental data:");
    res.status(400).json({
      success: false,
      message: "Failed to fetch company fundamental data.",
    });
  }
};
