import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface NewsItem {
  Heading: string;
  Newsdate: string;
  NewsTime: string;
  Details: string;
}


const CompanyNews = () => {
  const [companyNews, setCompanyNews] = useState<NewsItem[]>([]);

  const { fincode } = useParams<{ fincode: string }>();
  useEffect(() => {
    if (!fincode) return;

    // Fetch Company News
    axios
      .get(`http://localhost:3000/api/v1/CompanyNews/${fincode}`)
      .then((response) => {
        //console.log(response.data.data);
        const data: NewsItem[] = response.data.data || [];
        setCompanyNews(
          data
            .filter((item) => !item.Details.includes("td")) // Skip items with td element in the Details
            .map((item) => ({
              Heading: item.Heading || "No Title",
              Newsdate: item.Newsdate || "No Date",
              NewsTime: item.NewsTime || "No Time",
              Details: item.Details || "No Details",
            }))
        );
      })
      .catch((error) => {
        console.error("Error fetching company news:", error);
        setCompanyNews([
          {
            Heading: "Error",
            Newsdate: "",
            NewsTime: "",
            Details: "No news data",
          },
        ]);
      });
  }, [fincode]);

  return (
    <div className="bg-white mt-8 p-6 rounded-md">
      <h1 className="text-2xl font-semibold">Company News</h1>
      <div className="mt-3">
        {companyNews.map((news, index) => (
          <div key={index} className="border-b py-4">
            <h2 className="text-xl font-semibold">{news.Heading}</h2>
            <p className="text-sm text-gray-500">
              {news.Newsdate} at {news.NewsTime}
            </p>
            <div
              className="mt-2"
              dangerouslySetInnerHTML={{ __html: news.Details }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyNews;
