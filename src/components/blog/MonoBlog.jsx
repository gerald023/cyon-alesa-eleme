import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MonoBlog = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-lg border h-full border-gray-100 hover:shadow-2xl bg-white shadow-gray-300 transition-all duration-300">
      <a href={data?.link}>
        <img
          src={data?.image}
          alt="Blog"
          className="w-full h-56.5 object-cover "
        />
        <div className="m-4">
          
          <p className="text-[14px] xs:text-lg font-medium text-[#333333]">
            {data?.title.length > 20
              ? `${data?.title.slice(0, 10)}...`
              : data?.title}
          </p>
          <p className="text-[10px] xs:text-[14px] mt-1 font-normal text-gray-400 ">
             {data?.comments} Comments
             {data?.comments.length > 10
              ? `${data?.comments.slice(0, 6)}...`
              : data?.comments}
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
