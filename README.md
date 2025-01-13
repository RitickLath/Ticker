# Ticker Finology API Scraper & Custom API

A backend-first solution to efficiently access and serve stock market data from [Ticker Finology](https://ticker.finology.in). This project eliminates CORS issues by fetching data in the backend and re-serving it through a custom API. It also handles server-rendered HTML responses (e.g., company news) using Cheerio for scraping.

---

## Project Overview

### Purpose

This project is designed to provide a seamless interface to fetch and serve stock market data, including company fundamentals, price histories, news, and more. It addresses common challenges such as CORS restrictions and the need to parse server-rendered content.

### Features

- **Custom API Layer**: Access stock fundamentals, price summaries, corporate actions, and news through structured endpoints.
- **CORS-Free Access**: The backend handles API requests to bypass CORS restrictions.
- **HTML Scraping**: Extract data from server-rendered pages using Cheerio.
- **Frontend Integration**: A React-based frontend for smooth interaction and data presentation.

---

## Tech Stack

- **Backend**: Node.js, Express.js, Axios, Cheerio, TypeScript
- **Frontend**: React.js, Typescript
- **Scraping**: Cheerio for parsing HTML content
- **API Integration**: Axios for handling API requests and responses

---

## How It Works

1. **Backend API**

   - Fetches data from Ticker Finology’s APIs and server-rendered HTML pages.
   - Structures the data into developer-friendly JSON formats.
   - Addresses CORS issues by serving data directly from the backend.

2. **Frontend**

   - Provides a search-based interface to explore company data.
   - Implements a responsive UI for smooth navigation and data display.

3. **Data Scraping**
   - Uses Cheerio to extract data from server-rendered pages, like company news and financial summaries.

---

## API Endpoints

### Custom API Endpoints

| Endpoint                                          | Description                            |
| ------------------------------------------------- | -------------------------------------- |
| **GET /api/v1/CompanyBrief/:fincode**             | Fetch brief details about the company. |
| **GET /api/v1/Holding/:query**                    | Retrieve holdings information.         |
| **GET /api/v1/CorporateActions/:query**           | Get corporate actions for the query.   |
| **GET /api/v1/GroupCompany/:housecode**           | Fetch details about group companies.   |
| **GET /api/v1/Price/:fincode/:symbol/:scripcode** | Fetch historical stock prices.         |
| **GET /api/v1/CompanyNews/:fincode**              | Fetch the latest company news.         |
| **GET /api/v1/CompanyFundamental/:fincode**       | Retrieve stock fundamentals.           |

### Scraping Endpoints

| Endpoint                                         | Description                       |
| ------------------------------------------------ | --------------------------------- |
| **GET /api/v1/scrap/company-essential/:company** | Scrape company essential data.    |
| **GET /api/v1/scrap/price-summary/:company**     | Scrape price summary information. |

---

## Setup Instructions

### Prerequisites

- Node.js (v14+)
- npm (Node Package Manager)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ticker-finology-api.git
   cd ticker-finology-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm run start
   ```
   The backend will run on `http://localhost:3000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3001`.

---

## Key Code Examples

### Backend Example: Scraping with Cheerio

```typescript
scrap.get("/company-essential/:company", async (req, res) => {
  const url = `https://ticker.finology.in/company/${req.params.company}`;
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  const result = [];
  $(".col-6.col-md-4.compess").each((_, element) => {
    const title = $(element).find("small").text().trim();
    const value = $(element).find(".Number").text().trim();
    result.push({ title, value });
  });

  res.json(result);
});
```

### Frontend Example: Search Bar with API Integration

```tsx
const SearchAPI = async (query) => {
  const response = await fetch(`http://localhost:3000/api/v1/search/${query}`);
  const data = await response.json();
  setOptions(data.data || []);
};
```

---

## Future Improvements

- Add caching for frequently accessed data.
- Include rate-limiting to prevent excessive API usage.
- Implement user authentication for secured access.

---
