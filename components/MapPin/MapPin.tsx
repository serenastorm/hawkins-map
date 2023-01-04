import Image from "next/image";
import { usePopperTooltip } from "react-popper-tooltip";
import { icons, QuestionIcon } from "@/icons";
import { LocationStatusChip } from "@/components";

import type { Location } from "@/constants/locations";
import type { HTMLProps, CSSProperties } from "react";

import styles from "./MapPin.module.scss";

type MapPinType = {
  buttonProps: HTMLProps<HTMLButtonElement>;
  controlledVisible: boolean;
  setControlledVisible: (isVisible: boolean) => void;
  zoomIn: () => void;
  isSecondary: boolean;
} & Location;

export const MapPin = ({
  address,
  buttonProps,
  category,
  coordinates,
  controlledVisible,
  description,
  id,
  img,
  isSecondary,
  priority,
  setControlledVisible,
  status,
  title,
  zoomIn,
}: MapPinType) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    trigger: null,
    placement: "top",
    closeOnOutsideClick: true,
    visible: controlledVisible,
    onVisibleChange: setControlledVisible,
  });

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
      <button
        className={`${styles.mapPin} ${
          isSecondary ? styles.secondaryPin : ""
        } ${controlledVisible ? styles.selectedPin : ""}`}
        style={
          {
            "--coordinates-x": coordinates.x,
            "--coordinates-y": coordinates.y,
            "--priority": priority,
          } as CSSProperties
        }
        onClick={() => {
          zoomIn();
          setControlledVisible(!controlledVisible);
        }}
        // onMouseEnter={() => setControlledVisible(true)}
        // onMouseLeave={() => setControlledVisible(false)}
        onFocus={() => {
          zoomIn();
          setControlledVisible(true);
        }}
        onBlur={() => setControlledVisible(false)}
        {...buttonProps}
      >
        {icons[category]()}
        {status !== "confirmed" && (
          <div className={styles.badge}>
            <QuestionIcon />
          </div>
        )}
      </button>
    </>
  );
};
