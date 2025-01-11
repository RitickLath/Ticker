interface PropType {
  title: string;
  heading: string;
  text: string;
  imageSrc: string;
  points: string[];
  left?: boolean; // Default is false
}

const styles = {
  container: "w-full px-4 lg:px-16 py-4 bg-[#F9FBFF]",
  content: "flex flex-col lg:flex-row items-center lg:items-start gap-8",
  image: "w-full z-10 lg:w-[45%] object-contain",
  title: "text-blue-600 text-lg lg:text-xl font-semibold mb-2",
  heading: "text-2xl lg:text-2xl font-bold text-[#212529] mb-6",
  text: "text-[#353a3f] text-base mb-6",
  list: "list-disc list-inside text-[#353a3f] space-y-2",
};

const AboutPoint = ({
  title,
  heading,
  text,
  imageSrc,
  points,
  left = false,
}: PropType) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.content} ${left ? "lg:flex-row-reverse" : ""}`}>
        {/* Image Section */}
        <img
          className={`hidden lg:flex ${styles.image}`}
          src={imageSrc}
          alt="Section Illustration"
        />

        {/* Text Section */}
        <div className="flex flex-col z-50">
          <h2 className={styles.title}>{title}</h2>
          <h1 className={styles.heading}>{heading}</h1>
          <img
            className={`lg:hidden flex ${styles.image}`}
            src={imageSrc}
            alt="Section Illustration"
          />
          <p className={styles.text}>{text}</p>

          {/* Features List */}
          <ul className={styles.list}>
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPoint;
