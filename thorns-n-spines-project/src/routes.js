// routes.js
import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { PiChatCircleBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

export const useRoutes = () => {
  const { t } = useTranslation();

  return [
    {
      title: t('Home'),
      href: "/",
      Icon: BiHomeAlt2,
    },
    {
      title: t('Artists'),
      href: "/artists",
      Icon: FiSearch,
    },
    {
      title: t('Studio'),
      href: "/studio",
      Icon: IoPricetagsOutline,
    },
    {
      title: t('Contact'),
      href: "/contact",
      Icon: PiChatCircleBold,
    },
    {
      title: t('Guest Artists'),
      href: "/upcoming-guests",
      Icon: PiChatCircleBold,
    },
  ];
};
