import { query, Request, Response } from "express";
import { GroupCompany } from "../APIs/GroupCompanies";

export const getGroupCompanies = async (req: Request, res: Response) => {
  const { houseCode } = req.params;

  try {
    if (!houseCode) {
      res.status(400).json({
        success: false,
        message: "Missing required parameter: query.",
      });
      return;
    }

    const data = await GroupCompany(parseInt(houseCode));
    //console.log(data);
    res.json({ success: true, data });
  } catch (error) {
    console.error("Error fetching group companies:");
    res.status(400).json({
      success: false,
      message: "Failed to fetch group companies.",
    });
  }
};
