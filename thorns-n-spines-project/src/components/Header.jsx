import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <div className=" w-full h-auto fixed top-0 left-0 right-0 bg-tns-ash-gray-light  text-tns-ebony  border-x-tns-mint-cream font-sans z-50">
      <nav className="w-full flex items-center justify-start py-3 lg:py-8">
        {/* <span className="text-lg">⚡️</span> */}
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
};

export default Header;