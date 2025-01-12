import axios from "axios";

export const companyFundamental = async (fincode: number) => {
  try {
    const response = await axios.request({
      method: "get",
      maxBodyLength: Infinity,
      url: `https://ticker.finology.in/peers.ashx?fincode=${fincode}&mode=S&peercount=10`,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
        Referer: "https://ticker.finology.in/loader.js?v=2",
        "x-requested-with": "XMLHttpRequest",
      },
    });

    // console.log("Company Fundamental Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching company fundamental data:");
    throw new Error("Failed to fetch company fundamental data.");
  }
};

const sample = [
  {
    fincode: 100325,
    mcap: 1680585.3902026203,
    perchg: -1.0241,
    CLOSE_PRICE: 1241.9,
    High_PRICE: 1256.75,
    Low_PRICE: 1236.0,
    "52WeekLow": 1201.5,
    "52WeekHigh": 1608.8,
    netchange: -12.85,
    COMPNAME: "Reliance Industries Ltd.",
    SYMBOL: "RELIANCE",
    SNAME: "Reliance Industries",
    PE: 46.004304452997374,
    PB: 3.1644472982820919,
    EPS: 26.9953,
    EV_EBITDA: "22.8087",
    net_sales: 3.1440196324323995,
    CAP_ADEQUACY_RATIO: 0.0,
    NetNPA: 0.0,
    ROA: 4.4263,
    ROE: 8.4585,
    ROCE: 9.6643,
    TTM_YIELD: 0.4025,
    CAR_Y_1: 0.0,
    Sno: 0,
  },
  {
    fincode: 130965,
    mcap: 183971.493653724,
    perchg: -1.4523,
    CLOSE_PRICE: 130.28,
    High_PRICE: 133.0,
    Low_PRICE: 129.75,
    "52WeekLow": 129.5,
    "52WeekHigh": 196.8,
    netchange: -1.92,
    COMPNAME: "Indian Oil Corporation Ltd.",
    SYMBOL: "IOC",
    SNAME: "Indian Oil Corp.",
    PE: 11.699834758244128,
    PB: 1.0535066212098667,
    EPS: 11.1352,
    EV_EBITDA: "7.5219",
    net_sales: 0.23758226724959106,
    CAP_ADEQUACY_RATIO: 0.0,
    NetNPA: 0.0,
    ROA: 8.7284,
    ROE: 25.4397,
    ROCE: 21.3066,
    TTM_YIELD: 9.206,
    CAR_Y_1: 0.0,
    Sno: 1,
  },
  {
    fincode: 100547,
    mcap: 120457.59700482,
    perchg: -0.8393,
    CLOSE_PRICE: 277.65,
    High_PRICE: 283.5,
    Low_PRICE: 275.6,
    "52WeekLow": 227.825,
    "52WeekHigh": 376.0,
    netchange: -2.35,
    COMPNAME: "Bharat Petroleum Corporation Ltd.",
    SYMBOL: "BPCL",
    SNAME: "BPCL",
    PE: 9.2421841712824886,
    PB: 1.5785218690517611,
    EPS: 30.0416,
    EV_EBITDA: "4.7166",
    net_sales: 0.26887067266846965,
    CAP_ADEQUACY_RATIO: 0.0,
    NetNPA: 0.0,
    ROA: 15.9805,
    ROE: 42.1146,
    ROCE: 41.6759,
    TTM_YIELD: 5.6736,
    CAR_Y_1: 0.0,
    Sno: 2,
  },
  {
    fincode: 100104,
    mcap: 82655.265672864989,
    perchg: 0.0,
    CLOSE_PRICE: 388.4,
    High_PRICE: 393.05,
    Low_PRICE: 379.6,
    "52WeekLow": 278.0,
    "52WeekHigh": 457.2,
    netchange: 0.0,
    COMPNAME: "Hindustan Petroleum Corporation Ltd.",
    SYMBOL: "HINDPETRO",
    SNAME: "HPCL",
    PE: 18.963025882858343,
    PB: 2.0551137653207685,
    EPS: 20.4846,
    EV_EBITDA: "10.3021",
    net_sales: 0.1906586437965567,
    CAP_ADEQUACY_RATIO: 0.0,
    NetNPA: 0.0,
    ROA: 8.9365,
    ROE: 42.7504,
    ROCE: 22.3951,
    TTM_YIELD: 5.4068,
    CAR_Y_1: 0.0,
    Sno: 3,
  },
  {
    fincode: 100109,
    mcap: 24673.085582606,
    perchg: 0.0,
    CLOSE_PRICE: 140.7,
    High_PRICE: 146.1,
    Low_PRICE: 140.3,
    "52WeekLow": 140.1,
    "52WeekHigh": 289.25,
    netchange: 0.0,
    COMPNAME: "Mangalore Refinery And Petrochemicals Ltd.",
    SYMBOL: "MRPL",
    SNAME: "MRPL",
    PE: 27.198608964451314,
    PB: 2.0088183673178177,
    EPS: 5.176,
    EV_EBITDA: "9.9461",
    net_sales: 0.27291219310004311,
    CAP_ADEQUACY_RATIO: 0.0,
    NetNPA: 0.0,
    ROA: 9.681,
    ROE: 31.1525,
    ROCE: 25.4212,
    TTM_YIELD: 2.1322,
    CAR_Y_1: 0.0,
    Sno: 4,
  },
  {
    fincode: 100110,
    mcap: 8958.509824,
    perchg: 0.0,
    CLOSE_PRICE: 601.9,
    High_PRICE: 611.65,
    Low_PRICE: 594.1,
    "52WeekLow": 563.05,
    "52WeekHigh": 1274.0,
    netchange: 0.0,
    COMPNAME: "Chennai Petroleum Corporation Ltd.",
    SYMBOL: "CHENNPETRO",
    SNAME: "Chennai Petrol. Corp",
    PE: 13.068970536162338,
    PB: 1.1977416517446693,
    EPS: 46.0327,
    EV_EBITDA: "8.524",
    net_sales: 0.13494690739415149,
    CAP_ADEQUACY_RATIO: 0.0,
    NetNPA: 0.0,
    ROA: 14.6403,
    ROE: 36.4564,
    ROCE: 35.517,
    TTM_YIELD: 9.1377,
    CAR_Y_1: 0.0,
    Sno: 5,
  },
];
