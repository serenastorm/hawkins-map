import { useEffect, useState } from "react";

import type { CSSProperties } from "react";

import styles from "./OpeningTitle.module.scss";

export const OpeningTitle = () => {
  const [hasSeenLoadingScreen, setHasSeenLoadingScreen] = useState(true);
  const ANIMATION_DURATION = 4;

  useEffect(() => {
    const stringifiedHasSeenLoadingScreen =
      localStorage.getItem("hasSeenLoadingScreen") || "false";
    setHasSeenLoadingScreen(JSON.parse(stringifiedHasSeenLoadingScreen));

    let timer = setTimeout(() => {
      localStorage.setItem("hasSeenLoadingScreen", JSON.stringify(true));
      setHasSeenLoadingScreen(true);
    }, ANIMATION_DURATION * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (hasSeenLoadingScreen) {
    return null;
  }

  return (
    <div
      className={styles.openingTitle}
      style={
        { "--animation-duration": `${ANIMATION_DURATION}s` } as CSSProperties
      }
    >
      <div className={styles.background} />
      <div className={styles.title} />
      <div className={styles.noise} />
    </div>
  );
};
