import "../../index.css";
import SocialMedia from "../components/common/socialMedia/SocialMedia";
// import Form from "../components/contact/Form";
import winner_img from '../assets/images/winner_img.png'
import RegisterForm from "../components/registration/RegisterForm";


const Register = () => {
  return (
    <div className="relative mt-5 mb-5" id="home">
      <div className="introduction-profile-background">
        <div className="content">
          {/* <Introduction /> */}
          {/* <Profile />/ */}
          <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,0,0,0.1)]"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">
          <div>
            <div>
              <p className="text-[35px]  font-semibold text-wrap text-[#132238]">
                Face Of CYON (FOC) 2026 !
              </p>
              <p className="text-[12px] xs:text-[14px]  sm:text-lg md:text-lg max-lg:text-center pt-4 font-normal text-soft-dark">
                Do you think you have what it Takes to become the Face Of CYON, Register now and compete in this contest.
                There are lots of gifts to be won and mouth-watering award price to be given to the WINNER!!
              </p>
            </div>
            <div className="my-8.75 sm:max-lg:flex justify-between items-center">
             
            </div>
            <div className="w-full max-lg:text-center max-md:mb-4">
              <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[100%] object-cover"
              src={winner_img}
              alt=""
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-sm center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
            </div>
          </div>
          <div className="w-full overflow-y-scroll py-6.5">
            <p className="text-xl mb-2 xs:text-2xl sm:text-2xl md:text-[38px] font-semibold text-[#132238] lg:hidden text-center">
              Let’s discuss your Project
            </p>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
       {/* <Contact /> */}
          </div>
  );
};

export default Register;
