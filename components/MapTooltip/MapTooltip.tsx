import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LocationStatusChip } from "components";
import { tooltipAnimation } from "./MapTooltip.animations";

import type { Location } from "constants/locations";
import type { CSSProperties } from "react";

import styles from "./MapTooltip.module.scss";

type MapTooltipType = {
  controlledVisible: boolean;
} & Location;

export const MapTooltip = ({
  id,
  address,
  category,
  coordinates,
  controlledVisible,
  description,

  img,
  priority,
  status,
  source,
  title,
}: MapTooltipType) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <AnimatePresence>
      {controlledVisible && (
        <motion.article
          aria-labelledby={`${id}-tab-control`}
          id={`${id}-tab`}
          className={styles.tooltipContainer}
          {...tooltipAnimation.container}
        >
          <div
            className={styles.tooltip}
            style={
              {
                "--coordinates-x": coordinates.x,
                "--coordinates-y": coordinates.y,
              } as CSSProperties
            }
          >
            {img && (
              <motion.div
                className={styles.image}
                {...tooltipAnimation.image(imageLoaded)}
              >
                <Image
                  src={img}
                  alt=""
                  width="300"
                  height="168"
                  onLoad={() => setImageLoaded(true)}
                />
              </motion.div>
            )}

            <motion.div
              className={styles.title}
              {...tooltipAnimation.content(img ? 2 : 1)}
            >
              <h2>{title}</h2> <LocationStatusChip status={status} />
            </motion.div>
            {address && (
              <motion.address {...tooltipAnimation.content(img ? 3 : 2)}>
                {address}
              </motion.address>
            )}

            {source && (
              <motion.blockquote
                {...tooltipAnimation.content((address ? 3 : 2) + (img ? 1 : 0))}
              >
                <p>{source.quote}</p>
                <cite>{source.author}</cite>
              </motion.blockquote>
            )}
            {description && (
              <motion.p
                {...tooltipAnimation.content((address ? 3 : 2) + (img ? 1 : 0))}
              >
                {description}
              </motion.p>
            )}
          </div>
        </motion.article>
      )}
    </AnimatePresence>
  );
};
