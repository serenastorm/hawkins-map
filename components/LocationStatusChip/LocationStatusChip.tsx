import { CheckmarkIcon } from "@/icons";
import type { LocationStatus } from "@/constants/locations";

import styles from "./LocationStatusChip.module.scss";

type LocationStatusChipType = {
  status: LocationStatus;
};

export const LocationStatusChip = ({ status }: LocationStatusChipType) => {
  return (
    <div className={`${styles.chip} ${styles[`${status}Chip`]}`}>
      {status === "confirmed" && <CheckmarkIcon />}
      <p>{status}</p>
    </div>
  );
};
