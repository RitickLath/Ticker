import AboutPoint from "../Components/AboutPoint";

const styles = {
  container: "bg-[#F9FBFF] px-3",
  titleContainer: "pb-8 flex flex-col items-center pt-20",
  title: "text-3xl text-[#212529] font-bold lg:text-4xl",
  subtitle:
    "mt-4 leading-8 font-normal lg:text-xl max-w-[500px] lg:max-w-[800px] text-center",
  hrContainer: "flex justify-center",
  hr: "w-[5%] border-[1px] border-blue-500",
  pointsContainer: "mt-8 lg:mt-12 space-y-16",
};

const aboutPointsData = [
  {
    title: "1. Stock Analysis",
    heading: "Get Every Information you need. Right Away!",
    text: "Analyzing stocks is a serious affair and with Ticker you get a one-stop destination for cutting-edge stock research. Our stock analysis platform provides a sophisticated yet simple interface that would impress you while carrying out your stock analysis.",
    imageSrc: "https://assets.finology.in/ticker/images/stock-analysis.png",
    points: [
      "Comprehensive Data and Research",
      "Flexible and Customizable to Suit Your Needs",
      "Simple Interface That's Very Easy to Use",
    ],
    left: true,
  },
  {
    title: "2. Peer Comparision",
    heading: "Refine your Industry love and Pick the best Performing peer",
    text: "Compare the companies operating in the same industry and choose the best amongst the lot with Peer Comparison. A detailed comparison of similar companies will help you make a better decision. Ticker gives you an edge when it comes to peer comparison.",
    imageSrc: "https://assets.finology.in/ticker/images/peer-comparison.png",
    points: [
      "Intricately Detailed Data",
      "Compare Three Companies at a Time",
      "Industry-Wise Suggested Parameters",
    ],
    left: false,
  },
  {
    title: "3. Bundles",
    heading: "Some Strategies to Help you Get started!",
    text: "These are baskets of stocks shortlisted using proven investment strategies. These assortments of companies are based on predefined criteria that help you choose stocks based on your own investment strategy. And, if you already haven't thought about a strategy, don't worry. Bundles will help you select one.",
    imageSrc: "https://assets.finology.in/ticker/images/bundles.png",
    points: [
      "Options to Suit Different Investing Styles",
      "Daily Updates Based on Market Behavior",
      "Robust Parameters Crafted by Experts",
    ],
    left: true,
  },
];

const About = () => {
  return (
    <div className={styles.container}>
      {/* Title Section */}
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Here's How Ticker Helps You</h1>
        <h2 className={styles.subtitle}>
          Ticker is a revolutionary equity research tool that provides you with
          Three-Way Assistance for Intelligent Stock Picking.
        </h2>
      </div>

      {/* Centered Horizontal Rule */}
      <div className={styles.hrContainer}>
        <hr className={styles.hr} />
      </div>

      {/* About Points */}
      <div className={styles.pointsContainer}>
        {aboutPointsData.map((point, index) => (
          <AboutPoint
            key={index}
            title={point.title}
            heading={point.heading}
            text={point.text}
            imageSrc={point.imageSrc}
            points={point.points}
            left={point.left}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
