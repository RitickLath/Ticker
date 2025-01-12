import axios from "axios";

export const Holding = async (fincode: number): Promise<any> => {
  try {
    const response = await axios.request({
      method: "get",
      maxBodyLength: Infinity,
      url: "https://ticker.finology.in/GetShares.ashx?v=4.0&fincode=" + fincode,
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language": "en-US,en;q=0.9,en-IN;q=0.8",
        cookie:
          "_gcl_au=1.1.1343894248.1736544613; _gid=GA1.2.1254773656.1736544614; _clck=ke74ym%7C2%7Cfsh%7C0%7C1836; ASP.NET_SessionId=upro4tp2g045hsjgz4skcbed; _gat_gtag_UA_136614031_6=1; _clsk=iktfz9%7C1736604920182%7C2%7C1%7Cw.clarity.ms%2Fcollect; _ga_FDZ59LX88Z=GS1.1.1736604913.4.1.1736604954.19.0.0; _ga=GA1.2.1526825723.1736544614",
        priority: "u=1, i",
        referer: "https://ticker.finology.in/company/RELIANCE",
        "sec-ch-ua":
          '"Microsoft Edge";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
        "x-requested-with": "XMLHttpRequest",
      },
    });
    console.log("Response Data: ", response.data);
    return response.data; // Return the data
  } catch (error) {
    console.error("Error fetching holding data: ", error);
    throw error; // Propagate the error to the caller
  }
};

const sample = [
  { Particulars: "Promoters", Data: 50.24 },
  { Particulars: "FII", Data: 21.29 },
  { Particulars: "DII", Data: 17.76 },
  { Particulars: "Public", Data: 10.71 },
  { Particulars: "Others", Data: 0.0 },
];
