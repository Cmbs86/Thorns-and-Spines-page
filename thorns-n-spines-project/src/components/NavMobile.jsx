import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../routes";
import Hero from "../components/Hero.jsx";


const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden w-full ml-5 mt-5 flex justify-start">
      <Hamburger toggled={isOpen} size={40} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0"
          >
            <ul className="grid gap-2 mb-32 mt-48 ">
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
                  className="w-full p-[0.08rem] py-2 rounded-xl "
                  >
                
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex items-center justify-center w-full rounded-xl"
                      }
                      href={route.href}
                      >
                      <span className="flex gap-1 text-4xl mb-20 font-bold text-tns-mint-cream">{route.title}</span>
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
