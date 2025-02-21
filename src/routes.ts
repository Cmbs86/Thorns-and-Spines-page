// routes.js
// import { BiHomeAlt2 } from "react-icons/bi";
// import { FiSearch } from "react-icons/fi";
// import { PiChatCircleBold } from "react-icons/pi";
// import { IoPricetagsOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

interface Route {
  title: string;
  href: string;
  // Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Define the Icon type
}
export const useRoutes = ():Route[] => {
  const { t } = useTranslation();

  return [
    {
      title: t('home'),
      href: "/",
      // Icon: BiHomeAlt2,
    },
    {
      title: t('artists'),
      href: "/artists",
      // Icon: FiSearch,
    },
    {
      title: t('studio'),
      href: "/studio",
      // Icon: IoPricetagsOutline,
    },
    {
      title: t('guest_artists'),
      href: "/upcoming-guests",
      // Icon: PiChatCircleBold,
    },
    {
      title: t('store'),
      href: "/store",
      // Icon: PiChatCircleBold,
    },
    {
      title: t('contact'),
      href: "/contact",
      // Icon: PiChatCircleBold,
    },
  ];
};
