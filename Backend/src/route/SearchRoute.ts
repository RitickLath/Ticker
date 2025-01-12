import { Request, Response, Router } from "express";
import { searchCompany } from "../APIs/Search";

const SearchRouter = Router();

// API Endpoint: /search/:query
SearchRouter.get("/search/:query", async (req: Request, res: Response) => {
  const query = req.params.query;

  try {
    // Call the searchCompany function with the query
    const data = await searchCompany(query);

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

export default SearchRouter;
