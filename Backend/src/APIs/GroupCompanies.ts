// complete

import axios from "axios";

export const GroupCompany = (housecode: number) => {
  axios
    .request({
      method: "get",
      maxBodyLength: Infinity,
      url:
        "https://ticker.finology.in/GetHouseMaster.ashx?housecode=" + housecode,
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

const sample = [
  {
    FINCODE: 100325,
    COMPNAME: "Reliance Industries Ltd.",
    SCRIPCODE: 500325,
    MCAP: 1680585.3902026203,
    CLOSE_PRICE: 1241.9,
    SYMBOL: "RELIANCE",
    Status: "Active",
    SNAME: "Reliance Industries",
    scripcode1: 500325,
    HOUSE: "Mukesh Ambani",
    SECTOR: "Refineries",
    perchange: -1.02,
  },
  {
    FINCODE: 229365,
    COMPNAME: "JIO Financial Services Ltd.",
    SCRIPCODE: 543940,
    MCAP: 178241.38789434,
    CLOSE_PRICE: 280.55,
    SYMBOL: "JIOFIN",
    Status: "Active",
    SNAME: "JIO Financial Serv.",
    scripcode1: 543940,
    HOUSE: "Mukesh Ambani",
    SECTOR: "Finance - NBFC",
    perchange: -3.01,
  },
  {
    FINCODE: 132798,
    COMPNAME: "Network 18 Media & Investments Ltd.",
    SCRIPCODE: 532798,
    MCAP: 9711.516113364,
    CLOSE_PRICE: 62.98,
    SYMBOL: "NETWORK18",
    Status: "Active",
    SNAME: "Network 18 Media Inv",
    scripcode1: 532798,
    HOUSE: "Mukesh Ambani",
    SECTOR: "TV Broadcasting & Software Production",
    perchange: -5.45,
  },
  {
    FINCODE: 211531,
    COMPNAME: "Just Dial Ltd.",
    SCRIPCODE: 535648,
    MCAP: 8802.51958982,
    CLOSE_PRICE: 1035.1,
    SYMBOL: "JUSTDIAL",
    Status: "Active",
    SNAME: "Just Dial",
    scripcode1: 535648,
    HOUSE: "Mukesh Ambani",
    SECTOR: "Business Support",
    perchange: -3.73,
  },
  {
    FINCODE: 215739,
    COMPNAME: "Hathway Cable & Datacom Ltd.",
    SCRIPCODE: 533162,
    MCAP: 2690.5588399999997,
    CLOSE_PRICE: 15.2,
    SYMBOL: "HATHWAY",
    Status: "Active",
    SNAME: "Hathway Cable & Data",
    scripcode1: 533162,
    HOUSE: "Mukesh Ambani",
    SECTOR: "Telecommunication - Service  Provider",
    perchange: -3.68,
  },
  {
    FINCODE: 219237,
    COMPNAME: "Den Networks Ltd.",
    SCRIPCODE: 533137,
    MCAP: 1956.6177644999998,
    CLOSE_PRICE: 41.0,
    SYMBOL: "DEN",
    Status: "Active",
    SNAME: "Den Networks",
    scripcode1: 533137,
    HOUSE: "Mukesh Ambani",
    SECTOR: "TV Broadcasting & Software Production",
    perchange: -3.14,
  },
  {
    FINCODE: 123445,
    COMPNAME: "Reliance Industrial Infrastructure Ltd.",
    SCRIPCODE: 523445,
    MCAP: 1565.2659999999998,
    CLOSE_PRICE: 1036.6,
    SYMBOL: "RIIL",
    Status: "Active",
    SNAME: "Reliance Indl. Infra",
    scripcode1: 523445,
    HOUSE: "Mukesh Ambani",
    SECTOR: "Engineering - Construction",
    perchange: -4.76,
  },
  {
    FINCODE: 109073,
    COMPNAME: "Hathway Bhawani Cabletel & Datacom Ltd.",
    SCRIPCODE: 509073,
    MCAP: 14.6691,
    CLOSE_PRICE: 18.11,
    SYMBOL: "0",
    Status: "Active",
    SNAME: "HathwayBhawani Cable",
    scripcode1: 509073,
    HOUSE: "Mukesh Ambani",
    SECTOR: "TV Broadcasting & Software Production",
    perchange: 0.44,
  },
];
