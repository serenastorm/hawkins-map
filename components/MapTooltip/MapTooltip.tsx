import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
// import { usePopperTooltip } from "react-popper-tooltip";
import { icons, QuestionIcon } from "@/icons";
import { Button, LocationStatusChip } from "@/components";

import type { Location } from "@/constants/locations";
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
  // const IS_STARCOURT_TOOLTIP = id === "starcourt-mall";

  return (
    <AnimatePresence>
      {controlledVisible && (
        <motion.article
          aria-labelledby={`${id}-tab-control`}
          id={`${id}-tab`}
          className={styles.tooltipContainer}
          // layout
          // layoutId={id}
          // style={{ maxHeight: controlledVisible ? "max-content" : 0 }}
          // transition={{ duration: 1 }}
          initial={{
            opacity: 1,
            maxHeight: 0,
          }}
          animate={{
            opacity: 1,
            maxHeight: "50rem",
            transition: {
              duration: 0.5,
              type: "tween",
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.25, type: "tween", ease: "easeIn" },
          }}
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
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    type: "tween",
                    ease: "easeOut",
                    delay: 0.25,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.25,
                    type: "tween",
                    ease: "easeIn",
                  },
                }}
              >
                <Image
                  src={img}
                  alt="Map of Hawkins"
                  width="300"
                  height="168"
                />
              </motion.div>
            )}

            <motion.div
              className={styles.title}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  type: "tween",
                  ease: "easeOut",
                  delay: img ? 0.5 : 0.25,
                },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.25, type: "tween", ease: "easeIn" },
              }}
            >
              <h2>{title}</h2> <LocationStatusChip status={status} />
            </motion.div>
            {address && (
              <motion.address
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    type: "tween",
                    ease: "easeOut",
                    delay: img ? 0.7 : 0.5,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.25, type: "tween", ease: "easeIn" },
                }}
              >
                {address}
              </motion.address>
            )}

            {source && (
              <motion.blockquote
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    type: "tween",
                    ease: "easeOut",
                    delay: (address ? 0.7 : 0.5) + (img ? 0.2 : 0),
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.25, type: "tween", ease: "easeIn" },
                }}
              >
                <p>{source.quote}</p>
                <cite>{source.author}</cite>
              </motion.blockquote>
            )}
            {description && (
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    type: "tween",
                    ease: "easeOut",
                    delay: (address ? 0.7 : 0.5) + (img ? 0.2 : 0),
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.25, type: "tween", ease: "easeIn" },
                }}
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
