import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { tooltipAnimation } from "components/MapTooltip/MapTooltip.animations";

import styles from "./Tooltip.module.scss";

type TooltipProps = {
  children: JSX.Element;
  imgSrc: string;
};

export const Tooltip = ({ children, imgSrc }: TooltipProps) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  return (
    <AnimatePresence>
      <span
        className={styles.tooltipWrapper}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
        {showTooltip && (
          <motion.div
            className={styles.tooltipContainer}
            {...tooltipAnimation.container}
          >
            <motion.div
              className={styles.image}
              {...tooltipAnimation.image(imageLoaded)}
            >
              <Image
                src={imgSrc}
                alt=""
                width="300"
                height="168"
                onLoad={() => setImageLoaded(true)}
              />
            </motion.div>
          </motion.div>
        )}
      </span>
    </AnimatePresence>
  );
};
