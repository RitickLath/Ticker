import axios from "axios";

export const CorporateActions = (fincode: number) => {
  axios
    .request({
      method: "get",
      maxBodyLength: Infinity,
      url: "https://ticker.finology.in/GetCorpAction.ashx?fincode=" + fincode,
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

const ResponseSample = {
  Table: [
    {
      "EX Date": "19 Aug 2024",
      "Record date": "19 Aug 2024",
      Type: "Final",
      "Dividend %": 100.0,
      Amount: 10.0,
    },
    {
      "EX Date": "21 Aug 2023",
      "Record date": "21 Aug 2023",
      Type: "Final",
      "Dividend %": 90.0,
      Amount: 9.0,
    },
    {
      "EX Date": "18 Aug 2022",
      "Record date": "19 Aug 2022",
      Type: "Final",
      "Dividend %": 80.0,
      Amount: 8.0,
    },
    {
      "EX Date": "11 Jun 2021",
      "Record date": "14 Jun 2021",
      Type: "Final",
      "Dividend %": 70.0,
      Amount: 7.0,
    },
    {
      "EX Date": "02 Jul 2020",
      "Record date": "03 Jul 2020",
      Type: "Final",
      "Dividend %": 65.0,
      Amount: 6.5,
    },
  ],
  Table1: [
    { "EX Date": "28 Oct 2024", "Record date": "28 Oct 2024", Ratio: "1:1" },
    { "EX Date": "07 Sep 2017", "Record date": "09 Sep 2017", Ratio: "1:1" },
  ],
  Table2: [
    {
      "EX Date": "13 May 2020",
      "Record date": "14 May 2020",
      Ratio: "1:15",
      "Offer price": 1257.0,
    },
  ],
  Table3: [],
  fv: [],
  bonus: [
    { ex_date: "28 Oct 2024", Ratio: "1:1", recrd_date: "28 Oct 2024" },
    { ex_date: "07 Sep 2017", Ratio: "1:1", recrd_date: "09 Sep 2017" },
  ],
  rights: [
    {
      ex_date: "13 May 2020",
      Ratio: "1:15",
      recrd_date: "14 May 2020",
      Offerprice: 1257.0,
    },
  ],
  Dividend: [
    {
      Ex_Date: "19 Aug 2024",
      Record_Date: "19 Aug 2024",
      Dividend: 100.0,
      Type: "Final",
      Amount: 10.0,
    },
    {
      Ex_Date: "21 Aug 2023",
      Record_Date: "21 Aug 2023",
      Dividend: 90.0,
      Type: "Final",
      Amount: 9.0,
    },
    {
      Ex_Date: "18 Aug 2022",
      Record_Date: "19 Aug 2022",
      Dividend: 80.0,
      Type: "Final",
      Amount: 8.0,
    },
    {
      Ex_Date: "11 Jun 2021",
      Record_Date: "14 Jun 2021",
      Dividend: 70.0,
      Type: "Final",
      Amount: 7.0,
    },
    {
      Ex_Date: "02 Jul 2020",
      Record_Date: "03 Jul 2020",
      Dividend: 65.0,
      Type: "Final",
      Amount: 6.5,
    },
  ],
};
