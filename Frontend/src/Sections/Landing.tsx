import { FaSearch } from "react-icons/fa";

const styles = {
  container:
    "w-full px-4 min-h-screen bg-[#F2F8FF] flex flex-col justify-center items-center relative",
  logoContainer: "absolute top-6 left-6",
  logo: "h-12 lg:h-14 w-auto",
  title: " text-3xl text-[#212529] font-bold lg:text-4xl mt-32",
  subtitle: "mt-4 text-lg font-base lg:text-2xl text-center lg:font-medium text-blue-500",
  inputContainer: "relative mt-6 w-[90%] md:w-[80%] lg:w-[55%]",
  input:
    "pl-12 pr-4 outline-none shadow-lg shadow-blue-200 rounded-full w-full h-14 lg:h-16 bg-white",
  icon: "absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 text-xl",
  trendingContainer: "justify-center px-2 mt-6 flex flex-wrap space-x-3 gap-2",
  trendingTitle: "font-bold",
  button: "text-blue-600 px-4 rounded-xl bg-blue-100 text-sm font-medium",
  image: "mt-4 lg:-mt-6",
};

const trendingButtons = [
  { name: "ITC", url: "https://example.com/itc" },
  { name: "RELIANCE", url: "https://example.com/reliance" },
  { name: "HDFCBANK", url: "https://example.com/hdfcbank" },
  { name: "YESBANK", url: "https://example.com/yesbank" },
  { name: "IRCTC", url: "https://example.com/irctc" },
];

const Landing = () => {
  return (
    <div className={styles.container}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          src="https://assets.finology.in/ticker/images/tickerlogo.svg"
          alt="Logo"
        />
      </div>
      <h1 className={styles.title}>Investing ka Search Engine</h1>
      <h2 className={styles.subtitle}>
        The Modern Stock Screener that helps you pick better stocks
      </h2>
      {/* Input field with logo */}
      <div className={styles.inputContainer}>
        <FaSearch className={styles.icon} />
        <input
          className={styles.input}
          type="text"
          placeholder={`Type a Company Name or Brand to Search`}
        />
      </div>
      <div className={styles.trendingContainer}>
        <h1 className={styles.trendingTitle}>Whats Trending:</h1>
        
        {trendingButtons.map((button) => (
          <a
            key={button.name}
            href={button.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            {button.name}
          </a>
        ))}
      </div>
      <img
        className={styles.image}
        src="https://assets.finology.in/ticker/images/homebg.png"
        alt="bg"
      />
    </div>
  );
};

export default Landing;
