import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/old_school_day.jfif";
import card2 from "../../assets/images/portfolio-images/cyon_sport_day.jfif";
import card3 from "../../assets/images/portfolio-images/cyon_cultural_day.jfif";
import card4 from "../../assets/images/portfolio-images/oct_1_picnic.jfif";
import card5 from "../../assets/images/portfolio-images/youth_day_comt.jfif";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Youth Day",
    title: "Old School Day",
    description:
      "The Youth came out in style with old school attires. Representing the culture of early Nigerians in the 80s and beyond!",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "Youth Day",
    title: "Jersey/Sports Day",
    description:
      "All the youth turned out with their jersey, representing the club they support. After the Mass, the youths had a sports picnic!",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "Youth Day",
    title: "D-Day of The Youth Day.",
    description:
      "This was an exceptional day, as all the youths in the parish dressed in their cultural attire to show the different ethnic groups that makes up the CYON.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "SAC Day",
    title: "October Picnic Day",
    description:
      "The Sisters Affair Committee gave us a special treatment on OCtober 1st. Lots of games, drinks and fun!!!",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "Youth Day",
    title: "The Youth Day Planning Commt.",
    description:
      "These are the men and Woman who put their heads together to give the youths of St. Paul Alesa Eleme the best Youth Day Celebration ever...",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Recent Activities...</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a list of all the recent activities and event that has be done by the CYON in St. Paul Alesa Eleme.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          Show More
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
