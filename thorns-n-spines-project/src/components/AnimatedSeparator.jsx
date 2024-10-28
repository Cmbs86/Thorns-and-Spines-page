import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AnimatedSeparator = () => {
  const [isInView, setIsInView] = useState(false);
  const underlineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.8 } // Adjust this value based on when you want the animation to trigger
    );

    if (underlineRef.current) {
      observer.observe(underlineRef.current);
    }
    return () => {
      if (underlineRef.current) {
        observer.unobserve(underlineRef.current);
      }
    };
  }, []);

  return (
    <>
      <motion.div
        ref={underlineRef}
        className="w-[80%] h-[1px] bg-tns-ebony origin-center mt-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 1.2 }}
      />
    </>
  );
};

export default AnimatedSeparator;
