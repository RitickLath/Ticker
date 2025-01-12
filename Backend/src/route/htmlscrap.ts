import { Router } from "express";
import axios from "axios";
import * as cheerio from "cheerio";

const scrap = Router();

// COMPANY ESSENTIAL
scrap.get("/company-essential/:company", async (req, res) => {
  const { company } = req.params;
  try {
    // URL to scrape
    const url = "https://ticker.finology.in/company/" + company;

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
scrap.get("/price-summary/:company", async (req, res) => {
  const { company } = req.params;
  try {
    // URL to scrape
    const url = "https://ticker.finology.in/company/" + company;

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

export default scrap;
