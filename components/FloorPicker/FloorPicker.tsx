import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { floorPickerAnimation } from "./FloorPicker.animations";

import styles from "./FloorPicker.module.scss";

type FloorPickerType = {
  currentFloor: 1 | 2;
  setCurrentFloor: (newValue: 1 | 2) => void;
  showPicker: boolean;
  setShowPicker: (newValue: boolean) => void;
};

export const FloorPicker = ({
  currentFloor,
  setCurrentFloor,
  showPicker,
  setShowPicker,
}: FloorPickerType) => {
  return (
    <>
      <AnimatePresence key="navigation">
        {showPicker && (
          <motion.nav
            className={styles.navigation}
            {...floorPickerAnimation.container}
          >
            <ul>
              <li>
                <button
                  onClick={() => {
                    setCurrentFloor(1);
                    setShowPicker(false);
                  }}
                  title="Go to first floor"
                  aria-current={currentFloor === 1 ? "location" : "false"}
                >
                  <Image
                    src="/assets/starcourt-mall-floor-1.svg"
                    alt=""
                    width="2048"
                    height="1288"
                  />
                  <span className={styles.floorNumber}>
                    Floor <span className={styles.number}>1</span>
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentFloor(2);
                    setShowPicker(false);
                  }}
                  title="Go to second floor"
                  aria-current={currentFloor === 2 ? "location" : "false"}
                >
                  <Image
                    src="/assets/starcourt-mall-floor-2.svg"
                    alt=""
                    width="2048"
                    height="1288"
                  />
                  <span className={styles.floorNumber}>
                    Floor <span className={styles.number}>2</span>
                  </span>
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
