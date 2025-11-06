import img1 from "../../assets/images/blog/blog-1.jpg";
import img2 from "../../assets/images/blog/blog-2.jpg";
import img3 from "../../assets/images/blog/blog-3.jpg";
import img4 from "../../assets/images/blog/blog-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: img1,
    date: "27 Oct, 2025",
    comments: "hardworking and passionate about helping others",
    title: "George Usulor",
    link: "#!",
    voteLink: "#vote_",
  },
  {
    id: 2,
    image: img2,
    date: "27 Oct, 2025",
    comments: "hardworking and passionate about helping others",
    title: "John Douglas",
    link: "#!",
    voteLink: "#vote_",
  },
  {
    id: 3,
    image: img3,
    date: "27 Oct, 2025",
    comments: "hardworking and passionate about helping others",
    title: "Samuel Onu",
    link: "#!",
    voteLink: "#vote_",
  },
  {
    id: 4,
    image: img4,
    date: "27 Oct, 2025",
    comments: "hardworking and passionate about helping others",
    title: "Amarachi Nnachi",
    link: "#!",
    voteLink: "#vote_",
  },
  {
    id: 5,
    image: img2,
    date: "27 Oct, 2025",
    comments: "hardworking and passionate about helping others",
    title: "Francis Ernest",
    link: "#!",
    voteLink: "#vote_",
  },
  {
    id: 6,
    image: img1,
    date: "27 Oct, 2025",
    comments: "hardworking and passionate about helping others",
    title: "Sarah Acha",
    link: "#!",
    voteLink: "#vote_",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Contestants...</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Check out all our Amiable contestants, read their profile and story, like their videos and vote for them.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
