import { useRoutes } from "../routes";

const NavDesktop = () => {
  const routes = useRoutes();
  return (
    <ul className="hidden md:flex md:items-center gap-4">
      {routes.map((route) => {
        const { href, title } = route;
        return (
          <li key={title}>
            <a
              
              href={href}
              className="items-center gap-1 text-tns-ebony hover:text-tns-ash-gray/90  transition-all text-2xl font-bold"
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
