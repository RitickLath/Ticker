import { SetStateAction, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const styles = {
  inputContainer: "relative mt-6 w-[90%] md:w-[80%] lg:w-[55%]",
  input:
    "pl-12 pr-4 outline-none shadow-lg shadow-blue-200 rounded-full w-full h-14 lg:h-16 bg-white",
  icon: "absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 text-xl",
  dropdown:
    "absolute max-h-64 overflow-y-auto top-full mt-2 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10",
  option: "px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700",
  noResults: "px-4 py-2 text-gray-500",
};

interface OptionType {
  FINCODE: number;
  SCRIPCODE?: number;
  SYMBOL: string;
  brands?: string;
  compname: string | "";
  productlist?: string | null;
  searchterms?: string;
}

const SearchBar = () => {
  const [inputText, setInputText] = useState("");
  const [options, setOptions] = useState<OptionType[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInputText(e?.target?.value);
  };

  const handleOptionClick = (c: string, code: number) => {
    setInputText(c);
    navigate("company/" + c);
    setIsDropdownVisible(false);
    // console.log("Dropbox");
  };

  const SearchAPI = async (query: string) => {
    if (!query.trim()) {
      console.warn("Empty query: Skipping API call");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/search/${encodeURIComponent(query)}`
      );
      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Search Results:", data.data);
      setOptions(data.data || []);
      setIsDropdownVisible(true);
    } catch (error) {
      // may break
      const err = error as unknown;
      console.error("Error during API call:", err);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log("Debounced Input Text:", inputText);
      SearchAPI(inputText);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [inputText]);

  return (
    <div className={styles.inputContainer}>
      <FaSearch className={styles.icon} />
      <input
        onChange={handleChange}
        value={inputText}
        className={styles.input}
        type="text"
        placeholder="Type a Company Name or Brand to Search"
        onFocus={() => setIsDropdownVisible(true)}
      />

      {isDropdownVisible && (
        <div className={styles.dropdown}>
          {options.length > 0 ? (
            options.map((option: OptionType, i) => (
              <div
                key={i}
                onClick={() =>
                  //navigate(option.FINCODE)
                  handleOptionClick(option.SYMBOL, option.FINCODE)
                }
                className={styles.option}
              >
                {option.compname}
              </div>
            ))
          ) : (
            <div className={styles.noResults}>No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
