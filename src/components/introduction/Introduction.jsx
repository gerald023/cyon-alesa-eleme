import "./introduction.css";
import InformationSummary from "./InformationSummary";
import cyon_bg from '../../assets/images/portfolio-images/cyon_cultural_day.jfif'
// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Members",
    description: "250+",
  },
  {
    id: 2,
    title: "Year Created",
    description: "1997",
  },
  {
    id: 3,
    title: "Celebrations",
    description: "58",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, this is
            <span className="text-nowrap shrink-0 inline-block w-full">
              CYON Alesa, Eleme.
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            The Catholic Youth Organisation of Nigeria <span className="bg-highlight">(CYON)</span> chapter in Eleme, Rivers State stands out as a vibrant community of young Catholics who gather in faith, fellowship and service. In an era where social media shapes youth identity, their presence on platforms like Facebook and TikTok helps them share the joy of their Christian vocation—raising up young leaders who live out the motto <em>
              <span className="bg-highlight font-bold">“for God and for youths… through Christ”</span>
            </em>
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:example@gmail.com"
            >
              Say Hello!
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-536/636 relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={cyon_bg}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
