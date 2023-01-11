import { createElement } from "react";
import Link from "next/link";
import { usePopperTooltip } from "react-popper-tooltip";
import { icons, QuestionIcon, StarcourtLogomark } from "@/icons";
import { LocationStatusChip } from "@/components";

import type { Location } from "@/constants/locations";
import type { HTMLProps, CSSProperties } from "react";

import styles from "./MapPin.module.scss";

type MapPinType = {
  buttonProps: HTMLProps<HTMLButtonElement | HTMLAnchorElement>;
  controlledVisible: boolean;
  setControlledVisible: (isVisible: boolean) => void;
  zoomIn: () => void;
  isSecondary: boolean;
} & Location;

export const MapPin = ({
  buttonProps,
  category,
  coordinates,
  controlledVisible,
  id,
  isSecondary,
  priority,
  setControlledVisible,
  status,
  zoomIn,
}: MapPinType) => {
  const { setTriggerRef } = usePopperTooltip({
    trigger: null,
    placement: "top",
    closeOnOutsideClick: true,
    visible: controlledVisible,
    onVisibleChange: setControlledVisible,
  });

  const IS_STARCOURT_PIN = id === "starcourt-mall";

  const pinProps = {
    ...buttonProps,
    className: `${styles.mapPin} ${isSecondary ? styles.secondaryPin : ""} ${
      controlledVisible ? styles.selectedPin : ""
    } ${IS_STARCOURT_PIN ? styles.starcourtPin : ""}`,
    style: {
      "--coordinates-x": coordinates.x,
      "--coordinates-y": coordinates.y,
      "--priority": priority,
    } as CSSProperties,
    onFocus: () => {
      zoomIn();
      setControlledVisible(true);
    },
    onBlur: () => setControlledVisible(false),
  };

  const starcourtPinProps = {
    ...pinProps,
    href: "/starcourt",
  } as HTMLProps<HTMLAnchorElement>;

  const regularPinProps = {
    ...pinProps,
    onClick: () => {
      zoomIn();
      setControlledVisible(true);
    },
    // onMouseEnter: () => setControlledVisible(true),
    // onMouseLeave: () => setControlledVisible(false),
  } as HTMLProps<HTMLButtonElement>;

  return (
    <>
      <div
        ref={setTriggerRef}
        className={styles.mapCoordinates}
        style={
          {
            "--coordinates-x": coordinates.x,
            "--coordinates-y": coordinates.y,
            "--priority": priority,
          } as CSSProperties
        }
      ></div>
      {IS_STARCOURT_PIN ? (
        <a {...starcourtPinProps} title=" Explore the Starcourt Mall">
          <StarcourtLogomark />
        </a>
      ) : (
        <button {...regularPinProps} type="button">
          {icons[category]()}
          {status !== "confirmed" && (
            <div className={styles.badge}>
              <QuestionIcon />
            </div>
          )}
        </button>
      )}
    </>
  );
};
