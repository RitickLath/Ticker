import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CompanyNews from "../Sections/CompanyNews";

interface PriceSummaryItem {
  title: string;
  value: string;
}

interface CompanyEssentialItem {
  title: string;
  value: string;
  tooltip?: string;
}

const Company = () => {
  const { company } = useParams<{ company: string }>(); // TypeScript-safe useParams
  // const { fincode } = useParams<{ fincode: string }>();
  const [priceSummary, setPriceSummary] = useState<PriceSummaryItem[]>([]);
  const [companyEssentials, setCompanyEssentials] = useState<
    CompanyEssentialItem[]
  >([]);

  //console.log(fincode);
  useEffect(() => {
    if (!company) return;

    // Fetch Price Summary
    axios
      .get(`http://localhost:3000/api/v1/price-summary/${company}`)
      .then((response) => {
        const data: PriceSummaryItem[] = response.data || [];
        setPriceSummary(
          data.map((item) => ({
            title: item.title || "N/A",
            value: item.value || "N/A",
          }))
        );
      })
      .catch((error) => {
        console.error("Error fetching price summary:", error);
        setPriceSummary([{ title: "Error", value: "Could not fetch data" }]);
      });

    // Fetch Company Essentials
    axios
      .get(`http://localhost:3000/api/v1/company-essential/${company}`)
      .then((response) => {
        const data: CompanyEssentialItem[] = response.data || [];
        setCompanyEssentials(
          data.map((item) => ({
            title: item.title || "N/A",
            value: item.value || "N/A",
            tooltip: item.tooltip || "No additional information available",
          }))
        );
      })
      .catch((error) => {
        console.error("Error fetching company essentials:", error);
        setCompanyEssentials([
          { title: "Error", value: "Could not fetch data", tooltip: "" },
        ]);
      });
  }, [company]);

  return (
    <div className="bg-[#F5F8FD] p-3 px-6 mt-12">
      <p className="font-semibold">
        <span className="text-blue-500">Ticker</span> {">"}{" "}
        <span className="text-blue-500">Company</span> {">"}{" "}
        <span className="">{company} share price</span>
      </p>
      <h1 className="text-4xl font-bold mt-2 mb-3">{company}</h1>
      <h3>
        <span className="text-gray-500 font-medium">NSC:</span>{" "}
        <span className="text-white bg-blue-500 py-1 rounded-sm px-2">
          {company}
        </span>{" "}
        <span className="text-gray-500 font-medium">BSC:</span>{" "}
        <span className="text-white bg-blue-500 py-1 rounded-sm px-2">
          500470
        </span>
        <span className="text-gray-500 font-medium pl-2">SECTOR:</span>{" "}
        <span className="text-blue-500 py-1 font-semibold rounded-sm px-2">
          Steel & Iron Products
        </span>
      </h3>
      <div className="lg:flex justify-between">
        {/* Price Summary */}
        <div className="bg-white lg:w-[40%] h-full lg:px-8 lg:py-6 px-6 py-4 mt-8 rounded-md">
          <h1 className="text-2xl font-semibold">Price Summary</h1>
          <div className="grid grid-cols-2 gap-4 mt-3 font-medium">
            {priceSummary.map((item, index) => (
              <div key={index}>
                <h1 className="font-normal text-sm">
                  {item.title.toUpperCase()}
                </h1>
                <h1 className="text-lg">{item.value}</h1>
              </div>
            ))}
          </div>
        </div>

        {/* Company Essentials */}
        <div className="bg-white lg:w-[55%] h-full lg:px-8 lg:py-6 px-6 py-4 mt-8 rounded-md">
          <h1 className="text-2xl font-semibold">Company Essentials</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-3 font-medium">
            {companyEssentials.map((item, index) => (
              <div key={index}>
                <h1 className="font-normal text-sm">
                  {item.title.toUpperCase()}
                </h1>
                <h1 className="text-lg" title={item.tooltip}>
                  {item.value}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CompanyNews />
    </div>
  );
};

export default Company;
