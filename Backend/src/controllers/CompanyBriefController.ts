import { Request, Response } from "express";
import { companyBrief } from "../APIs/CompanyBrief";

export const getCompanyBrief = async (req: Request, res: Response) => {
  const { fincode } = req.params;

  try {
    if (!fincode) {
      res.status(400).json({
        success: false,
        message: "Missing required parameter: fincode.",
      });
      return;
    }

    const data = await companyBrief(parseInt(fincode));
    res.json({ success: true, data });
  } catch (error) {
    console.error("Error fetching company brief data:");
    res.status(400).json({
      success: false,
      message: "Failed to fetch company brief data.",
    });
  }
};
