/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // if (isInView) {
    //   console.log(isInView);
    // }
  }, [isInView]);
  return (
    <div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        ref={ref}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
