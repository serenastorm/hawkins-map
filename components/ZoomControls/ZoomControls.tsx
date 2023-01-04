import styles from "./ZoomControls.module.scss";

type ZoomControlsType = {
  zoomIn: () => void;
  zoomOut: () => void;
};

export const ZoomControls = ({ zoomIn, zoomOut }: ZoomControlsType) => {
  return (
    <section className={styles.container} aria-label="Zoom controls">
      <button onClick={zoomIn} title="Zoom in" className={styles.zoomButton}>
        +
      </button>
      <button onClick={zoomOut} title="Zoom out" className={styles.zoomButton}>
        -
      </button>
    </section>
  );
};
