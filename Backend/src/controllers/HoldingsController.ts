import { Request, Response } from "express";
import { Holding } from "../APIs/Holdings";

export const getHoldings = async (req: Request, res: Response) => {
  const { query } = req.params;

  try {
    const data = await Holding(parseInt(query));
    res.json({ success: true, data });
  } catch (error) {
    console.error("Error fetching holdings data:");
    res.status(400).json({
      success: false,
      message: "Failed to fetch holdings data.",
    });
  }
};
