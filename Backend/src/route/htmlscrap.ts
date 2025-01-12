import { Router } from "express";
import axios from "axios";
import * as cheerio from "cheerio";

const scrap = Router();

// COMPANY ESSENTIAL
scrap.get("/company-essential", async (req, res) => {
  try {
    // URL to scrape
    const url = "https://ticker.finology.in/company/TATASTEEL";

    // Fetch the HTML content of the page
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Initialize an array to store the result
    const result: any = [];

    // Loop through all elements with the class 'col-6 col-md-4 compess'
    $(".col-6.col-md-4.compess").each((index, element) => {
      const title = $(element).find("small").text().trim();
      const tooltip = $(element).find(".infolink").attr("title");

      // First, try to find the value inside '.Number'
      let value = $(element).find(".Number").text().trim();

      // If '.Number' is empty, check the direct text of the <p> tag
      if (!value) {
        value = $(element).find("p").text().trim();
      }

      // Clean up the value (e.g., remove non-breaking spaces, etc.)
      value = value
        .replace(/\s+/g, " ")
        .replace(/[^0-9.%₹\-]/g, "")
        .trim();

      // Push each result into the result array
      result.push({
        title: title,
        tooltip: tooltip,
        value: value,
      });
    });

    // Return the result as the API response
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while scraping the data.");
  }
});

// PRICE SUMMARY
scrap.get("/price-summary", async (req, res) => {
  try {
    // URL to scrape
    const url = "https://ticker.finology.in/company/TATASTEEL";

    // Fetch the HTML content of the page
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Initialize an array to store the result
    const result: any = [];

    // Loop through all elements with the class 'col-6 col-md-4 compess'
    $(".col-6.col-md-3.compess").each((index, element) => {
      const title = $(element).find("small").text().trim(); // Extract title from <small>
      const value = $(element).find("p .Number").text().trim(); // Extract value from <span class="Number">

      result.push({
        title: title,
        value: value,
      });
    });
    // Return the result as the API response
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while scraping the data.");
  }
});

// PROMOTER PLEDGE DATE WISE
scrap.get("/promoter-pledge", async (req, res) => {
  try {
    // URL to scrape
    const url = "https://ticker.finology.in/company/TATASTEEL";

    // Fetch the HTML content of the page
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Initialize an array to store the result
    const results: any = [];

    // Locate the table after the heading "Promoter Pledging %"
    const table = $('th:contains("Promoter Pledging")').next("table");

    if (table.length) {
      // Extract rows from the table
      table.find("tbody tr").each((index, row) => {
        const date = $(row).find("td").eq(0).text().trim(); // Extract Date
        const promoterPercentage = $(row).find("td").eq(1).text().trim(); // Extract Promoter %
        const pledgePercentage = $(row).find("td").eq(2).text().trim(); // Extract Pledge %

        results.push({
          date: date,
          promoter_percentage: promoterPercentage,
          pledge_percentage: pledgePercentage,
        });
      });
    }
    // Return the result as the API response
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while scraping the data.");
  }
});

// QUATERLY RESULT // date left
scrap.get("/quarterly-result", async (req, res) => {
  try {
    const url = "https://ticker.finology.in/company/TATASTEEL";

    // Fetch the HTML content of the page
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Initialize an array to store the results
    const results: any = [];

    // Loop through each row of data and extract all required fields
    const metrics = [
      "Net Sales",
      "Total Expenditure",
      "Operating Profit",
      "Other Income",
      "Interest",
      "Depreciation",
      "Exceptional Items",
      "Profit Before Tax",
      "Tax",
      "Profit After Tax",
      "Adjusted EPS (Rs)",
    ];

    metrics.forEach((metric) => {
      // Loop over each occurrence of the metric in the table
      $('th:contains("' + metric + '")').each((i, th) => {
        const row = {};
        const distinguish = i == 1 ? "Quarterly Result" : "Profit & Loss";
        row.metric = metric + " " + distinguish;
        row.index = i + 1; // To distinguish between multiple occurrences
        // Find all the corresponding value cells for the metric
        const dataCells = $(th).nextAll("td").find(".Number");
        dataCells.each((index, td) => {
          row[`value_${index + 1}`] = $(td).text().trim();
        });
        results.push(row);
      });
    });

    // Send the results as a JSON response
    res.status(200).json({
      success: true,
      data: results,
    });
  } catch (error) {
    console.error("Error fetching quarterly results:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch quarterly results.",
      error: error.message,
    });
  }
});

export default scrap;
