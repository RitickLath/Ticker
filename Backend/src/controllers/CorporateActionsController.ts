import { Request, Response } from "express";
import { CorporateActions } from "../APIs/CorporateActions";

export const getCorporateActions = async (req: Request, res: Response) => {
  const { query } = req.params;

  try {
    const data = await CorporateActions(parseInt(query));
    res.json({ success: true, data });
  } catch (error) {
    console.error("Error fetching corporate actions:");
    res.status(400).json({
      success: false,
      message: "Failed to fetch corporate actions.",
    });
  }
};
