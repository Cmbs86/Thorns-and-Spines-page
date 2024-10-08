import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../routes";



const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden  w-full pl-2 mt-5 flex ">
      <Hamburger toggled={isOpen} size={40} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex w-full h-full pb-96"
          >
            <ul className="w-full flex flex-col m-0 p-0 mt-48">
              {routes.map((route, idx) => {
                const { Icon } = route;
                
                return (
                  <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + idx / 10,
                  }}
                  key={route.title}
                  className="flex w-full py-2  "
                  >
                
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex items-center justify-center w-full"
                      }
                      href={route.href}
                      >
                        {/* fix media queries of the link/routes */}
                      <span className="flex text-4xl mb-20 font-bold text-tns-mint-cream">{route.title}</span>
                      {/* <Icon className="text-xl" /> */}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
