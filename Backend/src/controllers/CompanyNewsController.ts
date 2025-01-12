import { Request, Response } from "express";
import { companyNews } from "../APIs/CompanyNews";

export const getCompanyNews = async (req: Request, res: Response) => {
  const { fincode } = req.params;

  try {
    if (!fincode) {
      res.status(400).json({
        success: false,
        message: "Missing required parameter: fincode.",
      });
      return;
    }

    const data = await companyNews(parseInt(fincode));
    res.json({ success: true, data });
  } catch (error) {
    console.error("Error fetching company news:");
    res.status(400).json({
      success: false,
      message: "Failed to fetch company news.",
    });
  }
};
