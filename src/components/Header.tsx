import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
// import thorns_logo_clear from "../assets/images/thorns_logo_clear.webp";

const Header = () => {
  return (
    <header className=" bg-tns-ash-gray-light  text-tns-ebony  border-x-tns-mint-cream font-sans ">
      <nav className="w-full flex items-center justify-between py-3 md:py-6">
        <NavMobile />
        <NavDesktop />
      </nav>
    </header>
  );
};

export default Header;