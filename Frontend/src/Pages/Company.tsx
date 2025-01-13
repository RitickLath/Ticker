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

interface HoldingData {
  Particulars: string;
  Data: number;
}

const Company = () => {
  const { company } = useParams<{ company: string }>(); // TypeScript-safe useParams
  const [priceSummary, setPriceSummary] = useState<PriceSummaryItem[]>([]);
  const [companyEssentials, setCompanyEssentials] = useState<
    CompanyEssentialItem[]
  >([]);
  const [holdingData, setHoldingData] = useState<HoldingData[]>([]);
  const { fincode } = useParams<{ fincode: string }>();

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

    // Fetch Holding Data
    axios
      .get(`http://localhost:3000/api/v1/Holding/100820`)
      .then((response) => {
        const data: HoldingData[] = response.data.data || [];
        setHoldingData(
          data.map((item) => ({
            Particulars: item.Particulars || "N/A",
            Data: item.Data || 0,
          }))
        );
      })
      .catch((error) => {
        console.error("Error fetching holding data:", error);
        setHoldingData([{ Particulars: "Error", Data: 0 }]);
      });
  }, [company]);

  return (
    <div className="bg-[#F5F8FD] p-3 px-6">
      <div className="absolute top-6 left-6">
        <img
          className="h-12 lg:h-14 w-auto"
          src="https://assets.finology.in/ticker/images/tickerlogo.svg"
          alt="Logo"
        />
      </div>
      <p className="mt-20 font-semibold">
        <span className="text-blue-500">Ticker</span> {">"}{" "}
        <span className="text-blue-500">Company</span> {">"}{" "}
        <span className="">
          {localStorage.getItem("compname") || company} share price
        </span>
      </p>
      <h1 className="text-4xl font-bold mt-2 mb-3">
        {localStorage.getItem("compname") || company}
      </h1>
      <h3>
        <span className="text-gray-500 font-medium">NSC:</span>{" "}
        <span className="text-white bg-blue-500 py-1 rounded-sm px-2">
          {company}
        </span>{" "}
        <span className="text-gray-500 font-medium">BSC:</span>{" "}
        <span className="text-white bg-blue-500 py-1 rounded-sm px-2">
          {fincode}
        </span>
      </h3>
      <div className="lg:flex justify-between">
        {/* Price Summary */}
        <div className="lg:w-[40%]">
          <div className="bg-white lg:w-full lg:px-8 lg:py-6 px-6 py-4 mt-8 rounded-md">
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

          <div className=" bg-white lg:w-full lg:px-8 lg:py-6 px-6 py-4 mt-8 rounded-md">
            <h1 className="text-2xl font-semibold">Shareholding Pattern</h1>
            <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 mt-3 font-medium">
              {holdingData.map((item, index) => (
                <div key={index}>
                  <h1 className="font-normal text-sm">{item.Particulars}</h1>
                  <h1 className="text-lg">{item.Data}%</h1>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Essentials */}
        <div className="bg-white lg:w-[55%] h-full lg:px-8 lg:py-6 px-6 py-4 mt-8 rounded-md">
          <h1 className="text-2xl font-semibold">Company Essentials</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-3 font-medium">
            {companyEssentials.map((item, index) => (
              <div key={index} className="relative">
                <h1 className="font-normal text-sm flex items-center space-x-4">
                  {item.title.toUpperCase()}
                  {/* Info Icon */}
                  <span className="relative">
                    <div className="group cursor-pointer">
                      {/* Rounded 'i' icon */}
                      <div className="rounded-full bg-gray-300 ml-2 text-white flex items-center justify-center w-4 h-4 text-sm font-semibold">
                        i
                      </div>

                      {/* Tooltip - Displayed only on hover of the icon */}
                      {item.tooltip && (
                        <div className="absolute shadow-lg bottom-full mb-2 left-1/2 transform -translate-x-1/2 hidden group-hover:flex transition-opacity duration-300 w-64 px-6 py-2 bg-white text-gray-800 text-xs rounded-md z-10">
                          {item.tooltip}
                        </div>
                      )}
                    </div>
                  </span>
                </h1>
                <h1 className="text-lg" title={item.tooltip}>
                  {item.value}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Holding Data */}

      <CompanyNews />
    </div>
  );
};

export default Company;
