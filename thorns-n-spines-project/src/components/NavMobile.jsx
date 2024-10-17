import { useClickAway } from "react-use";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../routes";

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if(isOpen){
      document.body.style.overflow= "hidden";
    } else{
      document.body.style.overflow= "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="md:hidden w-full mt-5 flex ">
      <Hamburger toggled={isOpen} size={30} toggle={setOpen} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex w-full pb-[80vh]  "
          >
            <ul className="w-[91%] flex flex-col m-0 p-0 mt-28  ">
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
                    className="flex py-2  "
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className="flex items-center justify-center w-full "
                      href={route.href}
                    >
                      {/* fix media queries of the link/routes */}
                      <span className="flex text-3xl md:text-4xl mb-12 font-bold text-tns-ebony">
                        {route.title}
                      </span>
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
