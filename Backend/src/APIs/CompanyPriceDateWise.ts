import axios from "axios";

export const CompanyPriceDatewise = (
  fincode: number,
  symbol: string,
  scripcode: number
) => {
  axios
    .request({
      method: "get",
      maxBodyLength: Infinity,
      url: `https://ticker.finology.in/GetPrices.ashx?fincode=${fincode}&scripcode=${scripcode}&symbol=${symbol}&stk=BSE&type=Y&count=1`,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
        Referer: "https://ticker.finology.in/loader.js?v=2",
        "x-requested-with": "XMLHttpRequest",
      },
    })
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const Sample = [
  { price: 1370.05, Date: "2024-01-12T00:00:00" },
  { price: 1393.75, Date: "2024-01-15T00:00:00" },
  { price: 1373.83, Date: "2024-01-16T00:00:00" },
  { price: 1361.4, Date: "2024-01-17T00:00:00" },
  { price: 1367.45, Date: "2024-01-18T00:00:00" },
  { price: 1367.53, Date: "2024-01-19T00:00:00" },
  { price: 1356.6, Date: "2024-01-20T00:00:00" },
  { price: 1328.0, Date: "2024-01-23T00:00:00" },
  { price: 1344.35, Date: "2024-01-24T00:00:00" },
  { price: 1355.17, Date: "2024-01-25T00:00:00" },
  { price: 1448.08, Date: "2024-01-29T00:00:00" },
  { price: 1407.42, Date: "2024-01-30T00:00:00" },
  { price: 1426.6, Date: "2024-01-31T00:00:00" },
  { price: 1426.35, Date: "2024-02-01T00:00:00" },
];
