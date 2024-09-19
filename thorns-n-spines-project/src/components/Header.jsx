import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <div className=" w-full fixed top-0 left-0 right-0 bg-tns-ebony-dark  border-x-tns-mint-cream">
      <nav className="w-full flex items-center justify-start py-1 lg:py-16">
        {/* <span className="text-lg">⚡️</span> */}
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
};

export default Header;
