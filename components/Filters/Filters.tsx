import { AnimatePresence, motion } from "framer-motion";

import { LOCATION_TYPES } from "@/constants/locations";
import type { LocationType } from "@/constants/locations";

import styles from "./Filters.module.scss";

type FiltersType = {
  visibleLocationTypes: LocationType[];
  setVisibleLocationTypes: (newTypes: LocationType[]) => void;
  showConfirmedLocationsOnly: boolean;
  setShowConfirmedLocationsOnly: (newValue: boolean) => void;
  showFilters: boolean;
  setShowFilters: (newValue: boolean) => void;
};

export const Filters = ({
  visibleLocationTypes,
  setVisibleLocationTypes,
  showConfirmedLocationsOnly,
  setShowConfirmedLocationsOnly,
  showFilters,
  setShowFilters,
}: FiltersType) => {
  return (
    <>
      <button
        className={styles.toggleBtn}
        onClick={() => setShowFilters(!showFilters)}
      >
        Filters
      </button>
      <AnimatePresence>
        {showFilters && (
          <motion.section
            className={styles.filters}
            initial={{ x: "100%" }}
            animate={{
              x: 0,
              transition: { duration: 0.5, type: "tween", ease: "easeOut" },
            }}
            exit={{
              x: "100%",
              transition: { duration: 0.2, type: "tween", ease: "easeIn" },
            }}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setShowFilters(false)}
            >
              Close
            </button>
            <div>
              <h2>Filters</h2>
              <label>
                <input
                  type="checkbox"
                  name="confirmed_locations_only"
                  checked={showConfirmedLocationsOnly}
                  onChange={() =>
                    setShowConfirmedLocationsOnly(!showConfirmedLocationsOnly)
                  }
                />
                <span className={styles.checkmark} />
                Only show confirmed locations
              </label>
              <hr />
              <fieldset>
                <legend>Categories</legend>
                {LOCATION_TYPES.map((locationType) => {
                  const isChecked = visibleLocationTypes.includes(
                    locationType.label
                  );

                  return (
                    <label key={locationType.label}>
                      <input
                        type="checkbox"
                        name={locationType.label}
                        checked={isChecked}
                        onChange={() => {
                          if (isChecked) {
                            setVisibleLocationTypes(
                              visibleLocationTypes.filter(
                                (category) => category !== locationType.label
                              )
                            );
                          } else {
                            setVisibleLocationTypes([
                              ...visibleLocationTypes,
                              locationType.label,
                            ]);
                          }
                        }}
                      />
                      <span className={styles.checkmark} />
                      {locationType.label}
                    </label>
                  );
                })}
              </fieldset>
              {/* <p>This website is not affiliated with Netflix.</p> */}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
