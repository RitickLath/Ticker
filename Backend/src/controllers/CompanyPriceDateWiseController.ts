import { Request, Response } from "express";
import { CompanyPriceDatewise } from "../APIs/CompanyPriceDateWise";

export const getCompanyPrice = async (req: Request, res: Response) => {
  const { fincode, symbol, scripcode } = req.params;

  console.log(fincode);
  console.log(symbol);
  console.log(scripcode);
  try {
    if (!fincode || !symbol || !scripcode) {
      res.status(400).json({
        success: false,
        message:
          "Missing required query parameters: fincode, symbol, scripcode.",
      });
      return;
    }

    const data = await CompanyPriceDatewise(
      parseInt(fincode as string),
      symbol as string,
      parseInt(scripcode as string)
    );

    res.json({ success: true, data });
  } catch (error) {
    console.error("Error fetching company price data:");
    res.status(400).json({
      success: false,
      message: "Failed to fetch company price data.",
    });
  }
};
