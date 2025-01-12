import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Company from "./Pages/Company";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="company/:company" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
