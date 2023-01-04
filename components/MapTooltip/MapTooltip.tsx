import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePopperTooltip } from "react-popper-tooltip";
import { icons, QuestionIcon } from "@/icons";
import { LocationStatusChip } from "@/components";

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
  title,
}: MapTooltipType) => {
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
              <motion.img
                src={img}
                alt="Map of Hawkins"
                width="300"
                height="168"
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
                  transition: { duration: 0.25, type: "tween", ease: "easeIn" },
                }}
              />
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
