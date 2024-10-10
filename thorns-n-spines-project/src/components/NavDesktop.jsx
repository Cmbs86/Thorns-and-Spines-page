import { routes } from "../routes";

const NavDesktop = () => {
  return (
    <ul className="hidden md:flex md:items-center gap-5 text-sm">
      {routes.map((route) => {
        const { Icon, href, title } = route;
        return (
          <li>
            <a
              href={href}
              className=" items-center gap-1 text-tns-ebony hover:text-tns-ash-gray/90  transition-all text-3xl font-bold"
            >
              {/* <Icon /> */}
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavDesktop;
