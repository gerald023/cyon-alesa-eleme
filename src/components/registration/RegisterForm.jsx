import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { signUp } from "../../server/services/auth_services";
import { signupSchema } from "../../zod/formValidation";
import { uploadToCloudinary } from "../../server/cloudinary/uploadImage";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const commonClass =
  "input input-lg border-0 border-b-2 focus:outline-none focus:placeholder:text-picto-primary placeholder:text-[15px] md:placeholder:text-lg focus:border-picto-primary border-[#E6E8EB] w-full rounded-none px-0";

function RegisterForm() {
 const navigate = useNavigate();
 const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "password12345",
    gender: "",
    community: "",
    hobbies: "",
    profilePicture: "",
    bio: "",
  });

  const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  // didOpen: (toast) => {
  //   toast.onmouseenter = Swal.stopTimer;
  //   toast.onmouseleave = Swal.resumeTimer;
  // }
});

   const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [image, setImage] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage({
        file,
        preview: URL.createObjectURL(file),
      });
      setTimeout( async () => {
        const imgUrl = await uploadToCloudinary(file)
      setFormData({ ...formData, [e.target.name]: imgUrl });
      console.log(imgUrl)
      }, 1000);
    } else {
      alert("Please select a valid image file.");
    }
  };
// console.log(image)
  const handleRemoveImage = () => {
    setFormData({ ...formData, profilePicture: '' });
    setImage(null);
  };

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [loading, setLoading] = useState(false)
  
  const handleSignup = async (e) => {
    e.preventDefault();

    // ✅ Step 1: Validate with Zod
    const result = signupSchema.safeParse(formData);
    console.log(result, formData);
    // if (!result.success) {
    //   // Extract errors
    //   const formattedErrors = result.error.flatten().fieldErrors;
    //   setErrors(formattedErrors);
    //   setMessage("Please fix the errors before submitting.");
    //   return;
    // }

    // ✅ Step 2: Submit if validation passed
    try {
     setLoading(true)
      const res = await signUp(formData.email, '123456ddff', formData);
      console.log(res)

      Toast.fire({
        didClose: ()=>{
          navigate(`/contestant/?name=${res.profileDoc.fullName}&contestant=${res.profileDoc.userId}`)
        },
        icon: "success",
        title: "Signed up successfully"
      });
      setMessage("Account created successfully!");
      setErrors({});
      setLoading(false);
    } catch (err) {
      setLoading(false)
      console.log(err)
      setMessage(err.message);
    }
  };

  return (
    <>
      <div>
        <p className="text-[12px] xs:text-[14px] max-lg:text-center sm:text-lg font-normal text-soft-dark">
          Enter details about yourself.
        </p>
        <div className="mx-2">
          <form
            action=""
            onSubmit={handleSignup}
            className="flex flex-col gap-4 mt-4"
          >
            <input
              type="text"
              name="fullName"
              onChange={handleChange}
              placeholder="Full name*"
              className={`${commonClass}`}
              // required
            />
            {errors.fullName && <p className="text-red-500">{errors.fullName[0]}</p>}
            <input
              type="email"
              placeholder="Email*"
              className={`${commonClass}`}
              name="email"
              onChange={handleChange}
              // required
            />
            {errors.email && <p className="text-red-500">{errors.email[0]}</p>}
            <div className="flex gap-2.5 flex-row-reverse">
                <select
              name="community"
              placeholder="Community"
              className={`${commonClass}`}
              id=""
              onChange={handleChange}
            >
              <option value="" disabled selected hidden>
                Community
              </option>
              <option value="Alesa">Alesa</option>
              <option value="Alode">Alode</option>
              <option value="Aleto">Aleto</option>
              <option value="Agbonchia">Agbonchia</option>
            </select>
            {/* {errors.community && <p className="text-red-500">{errors.community[0]}</p>} */}
            <select
              name="gender"
              placeholder="Gender"
              className={`${commonClass}`}
              id=""
               onChange={handleChange}
            >
              <option value="" disabled selected hidden>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
             
            </select>
            
            </div>
            <div className="flex gap-2.5 justify-start ">
              {errors.gender && <p className="text-red-500">{errors.gender[0]}</p>}
              {errors.community && <p className="text-red-500">{errors.community[0]}</p>}
              
            </div>
            <input
              type="text"
              placeholder="Hobbies* (e.g: reading, dancing, singing...)"
              className={`${commonClass}`}
              onChange={handleChange}
              name="hobbies"
              // required
            />
            {errors.hobbies && <p className="text-red-500">{errors.hobbies[0]}</p>}


            {!image && (
       <>
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
            name="profilePicture"
            onChange={handleImageChange}
            accept="image/*"
            
            className="hidden"
          />
          
        </label>
        {errors.profilePicture && <p className="text-red-500">{errors.profilePicture[0]}</p>}
       </>
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
              name="bio"
              className={`${commonClass} h-45`}
              // required
              onChange={handleChange}
              placeholder="Tell us about yourself...*"
              id=""
            ></textarea>
            {errors.bio && <p className="text-red-500">{errors.bio[0]}</p>}
            <button
              type="submit"
              disabled={loading}
              className="btn gap-3 max-lg:mx-auto btn-primary rounded-sm mt-5 text-[13px] md:text-[16px] w-fit font-semibold lg:mt-12.5 p-2 md:px-4"
            >
              {
                loading ? 'signing in...' 
                :
                <>
                Send
              <FontAwesomeIcon icon={faPaperPlane} />
                </>
              }
              
            </button>
            {/* <p className="text-center mt-2 text-sm">{message}</p> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
