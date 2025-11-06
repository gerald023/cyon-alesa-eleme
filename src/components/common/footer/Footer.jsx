import { Link } from "react-scroll";
import logo from "../../../assets/logo.png";

/* Footer nabLinks */
const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Process", url: "work-process" },
  { id: 4, name: "Activities", url: "activities" },
  { id: 5, name: "Blog", url: "blog" },
  { id: 6, name: "Services", url: "services" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <a href="#" className="flex items-center border-0">
          <img src={logo} className="h-8 sm:h-14 rounded-2xl" alt="logo" />
          <p className="text-3xl sm:text-[32px] my-auto ms-[12px] font-semibold">
            CYON
          </p>
        </a>
        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            
              
               <Link
               key={item.id}
                        className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]"
                        href={`#${item.url.toLowerCase()}`}
                        to={`${item.url.toLowerCase()}`}
                        smooth={true}
                        duration={900}
                      >
                        {item.name}
                    <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
                      </Link>
            
          ))}
          
        </div>
        <p className="text-[12px] sm:text-[16px]">
          Copyright &copy; {copyrightYear} CYON.
        </p>
      </div>
      <p className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10">
        Developed with ❤️ by{" "}
        <a
          href="https://github.com/gerald023"
          className="underline font-bold"
          target="_blank"
        >
          Gerald Lekara
        </a>
      </p>
    </div>
  );
};

export default Footer;
