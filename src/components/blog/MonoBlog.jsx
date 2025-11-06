import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MonoBlog = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 hover:shadow-2xl bg-white shadow-gray-300 transition-all duration-300">
      <a href={data?.link}>
        <img
          src={data?.image}
          alt="Blog"
          className="w-full h-56.5 object-cover "
        />
        <div className="m-6">
          
          <p className="text-[14px] xs:text-lg font-medium text-[#333333]">
            {data?.title.length > 40
              ? `${data?.title.slice(0, 40)}...`
              : data?.title}
          </p>
          <p className="text-[10px] xs:text-[14px] mt-1 font-normal text-gray-400 ">
             {data?.comments} Comments
          </p>
          <p className="text-[10px] xs:text-[14px] font-normal mt-2 text-gray-400 ">
            {data?.date} 
          </p>
          <a
          href={data?.voteLink}
          className="btn btn-primary py-3 px-6 mt-5 text-center text-[16px] font-semibold"
        >
          <FontAwesomeIcon icon={faCheckToSlot} />
          Vote
        </a>
        </div>
         
      </a>
    </div>
  );
};

export default MonoBlog;
