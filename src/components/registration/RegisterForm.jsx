import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const commonClass =
  "input input-lg border-0 border-b-2 focus:outline-none focus:placeholder:text-picto-primary placeholder:text-[15px] md:placeholder:text-lg focus:border-picto-primary border-[#E6E8EB] w-full rounded-none px-0";

function RegisterForm() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage({
        file,
        preview: URL.createObjectURL(file),
      });
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <>
      <div>
        <p className="text-[12px] xs:text-[14px] max-lg:text-center sm:text-lg font-normal text-soft-dark">
          Enter details about yourself.
        </p>
        <div className="mx-2">
          <form
            action="mailto:stpaulsalesa@gmail.com"
            className="flex flex-col gap-4 mt-4"
          >
            <input
              type="text"
              placeholder="Full name*"
              className={`${commonClass}`}
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className={`${commonClass}`}
              required
            />

            <select
              name="Community"
              placeholder="Community"
              className={`${commonClass}`}
              id=""
            >
              <option value="" disabled selected hidden>
                Select your Community
              </option>
              <option value="Alesa">Alesa</option>
              <option value="Alode">Alode</option>
              <option value="Aleto">Aleto</option>
              <option value="Agbonchia">Agbonchia</option>
            </select>
            <input
              type="text"
              placeholder="Hobbies*"
              className={`${commonClass}`}
              required
            />


            {!image && (
        <label
          htmlFor="fileInput"
          className="cursor-pointer border-2 border-dashed border-gray-400 hover:border-picto-primary bg-gray-50 hover:bg-gray-100 transition-colors duration-200 w-48 h-48 flex flex-col items-center justify-center rounded-xl text-gray-500 hover:text-picto-primary"
        >
            <FontAwesomeIcon icon={faImage} />
          {/* <FaPlus size={30} className="mb-2" /> */}
          <span className="text-sm mt-1 font-medium">Profile Picture</span>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      )}

      {image && (
        <div className="relative w-48 h-48 group">
          <img
            src={image.preview}
            alt="preview"
            className="w-full h-full object-cover rounded-xl border-2 border-gray-300"
          />
          {/* Delete overlay */}
          <button
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 bg-black w-8 cursor-pointer bg-opacity-60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <FontAwesomeIcon icon={faXmark} />
            {/* <FaTimes size={16} /> */}
          </button>
        </div>
      )}

            <textarea
              name="About"
              className={`${commonClass} h-45`}
              required
              placeholder="Tell us about yourself...*"
              id=""
            ></textarea>
            <button
              type="submit"
              className="btn gap-3 max-lg:mx-auto btn-primary rounded-sm mt-5 text-[13px] md:text-[16px] w-fit font-semibold lg:mt-12.5 p-2 md:px-4"
            >
              Send
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
