import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const styles = {
  inputContainer: "relative mt-6 w-[90%] md:w-[80%] lg:w-[55%]",
  input:
    "pl-12 pr-4 outline-none shadow-lg shadow-blue-200 rounded-full w-full h-14 lg:h-16 bg-white",
  icon: "absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 text-xl",
};

const SearchBar = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e?.target?.value);
  };

  const SearchAPI = async (query: string) => {
    if (!query.trim()) {
      console.warn("Empty query: Skipping API call");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:4000/search/${encodeURIComponent(query)}`
      );
      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Search Results:", data);
      return data;
    } catch (error) {
      console.error("Error during API call:", error.message);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log("Debounced Input Text:", inputText);
      // Make API Call here
      SearchAPI(inputText);
    }, 1000);

    // Cleanup on component unmount
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
      />
    </div>
  );
};

export default SearchBar;
