import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <div className=" w-full  bg-tns-ash-gray-light  text-tns-ebony  border-x-tns-mint-cream font-sans ">
      <nav className="w-full flex items-center justify-start py-3 md:py-8">
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
};

export default Header;