import { routes } from "../routes";

const NavDesktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
      {routes.map((route) => {
        const { Icon, href, title } = route;
        return (
          <li>
            <a
              href={href}
              className="flex items-center gap-1 text-tns-mint-cream hover:text-neutral-300  transition-all text-3xl font-bold"
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
