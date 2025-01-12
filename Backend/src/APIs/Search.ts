import axios from "axios";

export const searchCompany = async (query: string) => {
  if (!query.trim()) {
    throw new Error("Query cannot be empty");
  }

  try {
    const response = await axios.request({
      method: "get",
      maxBodyLength: Infinity,
      url: `https://ticker.finology.in/GetSearchData.ashx?q=${encodeURIComponent(
        query
      )}`,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
        Referer: "https://ticker.finology.in/loader.js?v=2",
        "x-requested-with": "XMLHttpRequest",
      },
    });

    return response.data; // Return the data directly
  } catch (error) {
    // Log the error for debugging
    console.error("Error fetching company data:");

    // Throw the error to be handled by the router
    throw new Error("Failed to fetch company data");
  }
};
