import axios from "axios";

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://ticker.finology.in/company/TATASTEEL",
  headers: {
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "en-US,en;q=0.9,en-IN;q=0.8",
    "cache-control": "max-age=0",
    cookie:
      "_gcl_au=1.1.1343894248.1736544613; _gid=GA1.2.1254773656.1736544614; _ga_JC1K9Z0K56=GS1.1.1736615148.1.0.1736615149.59.0.0; _clck=ke74ym%7C2%7Cfsi%7C0%7C1836; ASP.NET_SessionId=zrgejtfhldtehmmxpgjvzf5y; _ga_FDZ59LX88Z=GS1.1.1736704668.13.1.1736706986.54.0.0; _ga=GA1.2.1526825723.1736544614; _clsk=18nmb7a%7C1736706990550%7C6%7C1%7Co.clarity.ms%2Fcollect",
    priority: "u=0, i",
    "sec-ch-ua":
      '"Microsoft Edge";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
  },
};

axios
  .request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
