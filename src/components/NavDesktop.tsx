import { useRoutes } from "../routes";
import { useLocation } from "react-router-dom";

const NavDesktop = () => {
  const routes = useRoutes();
  const location = useLocation(); // Get the current location

  return (
    <ul className="hidden md:flex md:items-center gap-4">
      {routes.map((route) => {
        const { href, title } = route;

        // Check if the current route matches the link's href
        const isActive = location.pathname === href;

        return (
          <li key={title}>
            {isActive ? (
              <span
                className="items-center gap-1 text-tns-ebony cursor-default text-xl font-bold transition-all"
              >
                {title}
              </span>
            ) : (
              <a
                href={href}
                className="items-center gap-1 text-tns-ebony hover:text-tns-ash-gray/90 transition-all text-xl font-bold"
              >
                {title}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavDesktop;
