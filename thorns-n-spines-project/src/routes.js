import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { PiChatCircleBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";

export const routes = [
  {
    title: "Home",
    href: "/",
    Icon: BiHomeAlt2,
  },
  {
    title: "Artists",
    href: "/artists",
    Icon: FiSearch,
  },
  {
    title: "Studio",
    href: "/studio",
    Icon: IoPricetagsOutline,
  },
  {
    title: "Contact",
    href: "/contact",
    Icon: PiChatCircleBold,
  },
  {
    title: "Guest Artists",
    href: "/upcoming-guests",
    Icon: PiChatCircleBold,
  },
];