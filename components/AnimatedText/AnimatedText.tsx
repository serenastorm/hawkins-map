import { useCallback, useEffect, useState } from "react";
import type { StarCourtLocation } from "constants/starcourt-locations";

import styles from "./AnimatedText.module.scss";

type AnimatedTextType = { mapArea: StarCourtLocation["id"] | null };

export const AnimatedText = ({ mapArea }: AnimatedTextType) => {
  const [showStarCourtBaseAnimation, setShowStarCourtBaseAnimation] =
    useState<boolean>(false);
  const [showScoopsAhoyAnimation, setShowScoopsAhoyAnimation] =
    useState<boolean>(false);

  const ANIMATION_DURATION = 3000;

  useEffect(() => {
    if (mapArea === "starcourt-base") {
      setShowStarCourtBaseAnimation(true);
      setTimeout(() => {
        setShowStarCourtBaseAnimation(false);
      }, ANIMATION_DURATION);
    }
  }, [mapArea, ANIMATION_DURATION]);

  useEffect(() => {
    if (mapArea === "scoops-ahoy") {
      setShowScoopsAhoyAnimation(true);
      setTimeout(() => {
        setShowScoopsAhoyAnimation(false);
      }, ANIMATION_DURATION);
    }
  }, [mapArea, ANIMATION_DURATION]);

  if (!mapArea && !showScoopsAhoyAnimation && !showStarCourtBaseAnimation) {
    return null;
  }

  return (
    <>
      {showScoopsAhoyAnimation && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="399"
          height="70"
          fill="none"
          viewBox="0 0 399 70"
          className={`${styles.animatedText} ${styles.scoopsAhoy}`}
          aria-hidden="true"
        >
          {/* A */}
          <path stroke="white" strokeWidth="8" d="M4.5 60l23-46 8 53.5"></path>
          <path stroke="white" strokeWidth="8" d="M6 43.5l30.5-1"></path>
          {/* H */}
          <path stroke="white" strokeWidth="8" d="M51.5 20L42 59.5"></path>
          <path stroke="white" strokeWidth="7" d="M41 37.5L76 40"></path>
          <path stroke="white" strokeWidth="8" d="M77 13L65.5 60.5"></path>
          {/* O */}
          <path
            stroke="white"
            strokeWidth="8"
            d="M82.5 55C79.498 53 77 37.5 99 23.5c0 0 13.5 9 8.499 22C106 50 97 62.5 82.499 55z"
          ></path>
          {/* Y */}
          <path stroke="white" strokeWidth="8" d="M113 21l19.5 22"></path>
          <path
            stroke="white"
            strokeWidth="8"
            d="M146 21l-17 18.5-2.5 22.5"
          ></path>
          {/* S */}
          <path
            stroke="white"
            strokeWidth="8"
            d="M197.001 24.5C209 8 175.501 17 175.501 27c0 12 19-.5 23.5 10s-16.5 24.5-28 18.5c-4.141-3.5.001-10 4.501-12"
          ></path>
          {/* A */}
          <path
            stroke="white"
            strokeWidth="7"
            d="M206 56.392L223.065 22 229 62"
          ></path>
          <path stroke="white" strokeWidth="7" d="M207 44l23-1"></path>
          {/* I */}
          <path stroke="white" strokeWidth="8" d="M244 20.5l-7 40"></path>
          {/* L */}
          <path stroke="white" strokeWidth="8" d="M260 21.5L251 61"></path>
          <path stroke="white" strokeWidth="8" d="M244 55l32.5 2.5"></path>
          {/* O */}
          <path
            stroke="white"
            strokeWidth="8"
            d="M279.945 54.5c-3.001-2-5.5-17.5 16.5-31.5 0 0 13.5 9 8.5 22-1.5 4.5-10.5 17-25 9.5z"
          ></path>
          {/* R */}
          <path stroke="white" strokeWidth="6" d="M320.5 20.5l-7 41.5"></path>
          <path
            stroke="white"
            strokeWidth="7"
            d="M313.5 24c8.833 0 26.6 2.1 27 10.5-1 17.5-22 0-23 5.5L348 66.5"
          ></path>
          {/* S */}
          <path
            stroke="white"
            strokeWidth="7"
            d="M368.838 31.686c9.892-13.893-17.722-6.315-17.722 2.104 0 10.104 15.661-.42 19.371 8.42 3.71 8.84-13.601 20.627-23.081 15.576-3.413-2.947.001-8.42 3.71-10.104"
          ></path>
          {/* ! */}
          <path
            stroke="white"
            strokeWidth="7"
            d="M395 10l-7.5 39.75M385 63l1.25-6.625"
          ></path>
        </svg>
      )}
      {showStarCourtBaseAnimation && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="204"
          height="126"
          fill="none"
          viewBox="0 0 204 126"
          className={`${styles.animatedText} ${styles.starcourtBase}`}
          aria-hidden="true"
        >
          {/* C */}
          <path
            stroke="white"
            strokeWidth="7"
            d="M40 9C2-11.5-.56 37.5 9 42c8.5 4 18.5-2.9 22.5-8.5"
          ></path>
          {/* O */}
          <path
            stroke="white"
            strokeWidth="8"
            d="M41.944 42.5c-3-2-5.5-17.5 16.5-31.5 0 0 13.501 9 8.5 22-1.499 4.5-10.499 17-25 9.5z"
          ></path>
          {/* M */}
          <path stroke="white" strokeWidth="7" d="M85.5 7.5L72 49"></path>
          <path stroke="white" strokeWidth="7" d="M83 8l9 22 21-19"></path>
          <path stroke="white" strokeWidth="8" d="M114.5 9l-17 49"></path>
          {/* M */}
          <path stroke="white" strokeWidth="7" d="M127.5 8L114 49.5"></path>
          <path stroke="white" strokeWidth="7" d="M125 8.5l9 22 21-19"></path>
          <path stroke="white" strokeWidth="8" d="M156.5 9.5l-17 49"></path>
          {/* I */}
          <path stroke="white" strokeWidth="7" d="M168 9l-7.5 38"></path>
          {/* E */}
          <path
            stroke="white"
            strokeWidth="7"
            d="M185 9l-9.5 36s19-5 26.5-3.5"
          ></path>
          <path stroke="white" strokeWidth="6" d="M179 12l24.5 1"></path>
          <path stroke="white" strokeWidth="6" d="M180.5 27h19"></path>
          {/* B */}
          <path stroke="white" strokeWidth="7" d="M54.5 86.5l-9.5 38"></path>
          <path
            stroke="white"
            strokeWidth="7"
            d="M44 80c9.167-1.167 27.9-1.2 29.5 8 1.6 9.2-14.333 11.167-22.5 11 8.333 1.5 24.9 6 24.5 12-.5 7.5-15.5 12-29.5 7.5"
          ></path>
          {/* * */}
          <path stroke="white" strokeWidth="5" d="M100.5 75.5l-1.5 26"></path>
          <path stroke="white" strokeWidth="5" d="M87.5 87l26 .5"></path>
          <path stroke="white" strokeWidth="5" d="M90 79l22.5 19.5"></path>
          <path stroke="white" strokeWidth="5" d="M109.5 79l-19 17.5"></path>

          {/* * */}
          <path stroke="white" strokeWidth="5" d="M140 76l-1.5 26"></path>
          <path stroke="white" strokeWidth="5" d="M127 87.5l26 .5"></path>
          <path stroke="white" strokeWidth="5" d="M129.5 79.5L152 99"></path>
          <path stroke="white" strokeWidth="5" d="M149 79.5L130 97"></path>

          {/* . */}
          {/* <path stroke="white" strokeWidth="7" d="M128.5 110l-6 13"></path> */}
          {/* . */}
          {/* <path stroke="white" strokeWidth="7" d="M151 110l-6 13"></path> */}
          {/* . */}
          {/* <path stroke="white" strokeWidth="7" d="M171 110l-6 13"></path> */}
        </svg>
      )}
    </>
  );
};
