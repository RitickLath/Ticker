import { Router } from "express";
import { getCompanyBrief } from "../controllers/CompanyBriefController";
import { getHoldings } from "../controllers/HoldingsController";
import { getCorporateActions } from "../controllers/CorporateActionsController";
import { getGroupCompanies } from "../controllers/GroupCompaniesController";
import { getCompanyPrice } from "../controllers/CompanyPriceDateWiseController";
import { getCompanyNews } from "../controllers/CompanyNewsController";
import { getCompanyFundamental } from "../controllers/CompanyFundamentalController";

const Company = Router();

Company.get("/CompanyBrief/:fincode", getCompanyBrief);
Company.get("/Holding/:query", getHoldings);
Company.get("/CorporateActions/:query", getCorporateActions);
Company.get("/GroupCompany/:housecode", getGroupCompanies);
Company.get("/Price/:fincode/:symbol/:scripcode", getCompanyPrice); // Query params: fincode, symbol, scripcode
Company.get("/CompanyNews/:fincode", getCompanyNews);
Company.get("/CompanyFundamental/:fincode", getCompanyFundamental);

export default Company;
