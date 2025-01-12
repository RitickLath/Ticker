import axios from "axios";

export const companyNews = async (fincode: number) => {
  try {
    const response = await axios.request({
      method: "get",
      maxBodyLength: Infinity,
      url: `https://ticker.finology.in/News.ashx?fincode=${fincode}`,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
        Referer: "https://ticker.finology.in/loader.js?v=2",
        "x-requested-with": "XMLHttpRequest",
      },
    });

    //console.log("Company News:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching company news:");
    throw new Error("Failed to fetch company news.");
  }
};

const sample = [
  {
    Details:
      '<p style="text-align: justify;">Reliance Industries has reportedly invested $13 billion on acquisitions in the past five years across new energy, telecom, retail and media business to script a pivot away from core oil and petrochemicals business to clean energy and consumer facing verticals.&nbsp;</p><p style="text-align: justify;">The company has invested 14% in new energy, 48% in technology, media and telecommunications (TMT), 9% in retail, and increasingly more in healthcare.</p><p style="text-align: justify;">Reliance Industries is India’s largest private sector company. The company’s activities span hydrocarbon exploration and production, petroleum refining and marketing, petrochemicals, retail and 4G digital services.</p>',
    newsid: 1138686,
    Heading:
      "Reliance Industries invests $13 billion in last 5 years for acquisitions: Report",
    Newsdate: "2024-12-31T00:00:00",
    NewsTime: "17:14",
  },
  {
    Details:
      '<p style="text-align: justify;">Reliance Industries’ wholly owned subsidiary -- Reliance Digital Health (RDHL) has acquired 45% equity stake, on a fully diluted basis, in Health Alliance Group Inc. for an aggregate consideration of $10 million.</p><p style="text-align: justify;">The investment will empower RDHL to develop a virtual diagnostic and care platform, expanding access to healthcare for underserved communities.</p><p style="text-align: justify;">Reliance Industries is India’s largest private sector company. The company’s activities span hydrocarbon exploration and production, petroleum refining and marketing, petrochemicals, retail and 4G digital services.</p>',
    newsid: 1138498,
    Heading:
      "Reliance Industries’ arm acquires 45% stake in Health Alliance Group Inc",
    Newsdate: "2024-12-31T00:00:00",
    NewsTime: "09:25",
  },
  {
    Details:
      '<p style="text-align: justify;">Reliance Industries’ (RIL) telecom arm -- Reliance Jio Infocomm (Jio) has lost 37.60 lakh customers in October 2024. Following this, the company’s total customer base has decreased to 46.00 crore with market share of 39.99% in terms of wireless subscribers as on October 31, 2024. In September 2024, the company had lost 79.69 lakh customers.</p><p style="text-align: justify;">Reliance Industries is India’s largest private sector company. The company’s activities span hydrocarbon exploration and production, petroleum refining and marketing, petrochemicals, retail and 4G digital services.</p><div style="text-align: justify;"><br></div>',
    newsid: 1137150,
    Heading: "Reliance Industries’ arm loses 37.60 lakh subscribers in October",
    Newsdate: "2024-12-23T00:00:00",
    NewsTime: "16:15",
  },
];
