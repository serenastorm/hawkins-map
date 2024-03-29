import { useEffect, useState, Fragment } from "react";
import Image from "next/image";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { locations } from "constants/starcourt-locations";
import { useWindowDimensions } from "infrastructure/hooks";
import { AnimatedText, Button, FloorPicker } from "components";
import type { CSSProperties } from "react";
import type { StarCourtLocation } from "constants/starcourt-locations";

import styles from "styles/Starcourt.module.scss";

export default function Starcourt() {
  const BASE_IMAGE_SIZE = { width: 2048, height: 1288 };
  const windowDimensions = useWindowDimensions();
  const [isImageReady, setIsImageReady] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(1);
  const [showFloorPicker, setShowFloorPicker] = useState<boolean>(false);
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const [imageSize, setImageSize] = useState<{ width: number; height: number }>(
    { width: 2048, height: 1288 }
  );
  const [currentFloor, setCurrentFloor] = useState<1 | 2>(1);
  const [highlightedMapArea, setHighlightedMapArea] = useState<
    StarCourtLocation["id"] | null
  >(null);

  const MAX_SCALE = 3;
  const WHEEL_STEP = 0.2;

  useEffect(() => {
    const BASE_IMAGE_SIZE = { width: 2048, height: 1288 };

    const { width: windowWidth, height: windowHeight } = windowDimensions;

    if (windowWidth && windowHeight) {
      const imageHeightIfFullWidth =
        (BASE_IMAGE_SIZE.height * windowWidth) / BASE_IMAGE_SIZE.width;
      const imageWidthIfFullHeight =
        (BASE_IMAGE_SIZE.width * windowHeight) / BASE_IMAGE_SIZE.height;
      const imageIsFullWidth = imageHeightIfFullWidth >= windowHeight;

      setImageSize({
        width: imageIsFullWidth ? windowWidth : imageWidthIfFullHeight,
        height: imageIsFullWidth ? imageHeightIfFullWidth : windowHeight,
      });
    }
  }, [windowDimensions]);

  return (
    <>
      <Head>
        <title>Starcourt Mall</title>
        <meta name="description" content="Interactive map of Starcourt Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/starcourt-og-image.jpg" />
        <meta name="theme-color" content="#3057e1" />
      </Head>
      <AnimatePresence>
        <main>
          <div className={styles.mapWrapper}>
            <div className={styles.background}>
              <motion.div
                className={styles.horizontalLines}
                initial={{ scaleY: 0 }}
                animate={{
                  scaleY: 1,
                  transition: { duration: 1.5, type: "tween", ease: "easeOut" },
                }}
                exit={{
                  scaleY: 0,
                  transition: { duration: 0.2, type: "tween", ease: "easeIn" },
                }}
              />
              <motion.div
                className={styles.verticalLines}
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: 1,
                  transition: { duration: 1.5, type: "tween", ease: "easeOut" },
                }}
                exit={{
                  scaleX: 0,
                  transition: { duration: 0.2, type: "tween", ease: "easeIn" },
                }}
              />
            </div>

            <TransformWrapper
              key="starcourt-map"
              initialScale={scale}
              maxScale={MAX_SCALE}
              centerOnInit
              onPanningStart={() => setIsPanning(true)}
              onPanningStop={() => setIsPanning(false)}
              onZoomStop={(event) => setScale(event.state.scale)}
              wheel={{ step: WHEEL_STEP }}
              pinch={{ step: WHEEL_STEP }}
              doubleClick={{ step: WHEEL_STEP }}
            >
              {({ zoomIn, zoomOut, zoomToElement }) => (
                <Fragment>
                  <motion.div
                    className={styles.backBtn}
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 1,
                        type: "tween",
                        ease: "easeOut",
                      },
                    }}
                    exit={{
                      x: "-100%",
                      opacity: 0,
                      transition: {
                        duration: 0.2,
                        type: "tween",
                        ease: "easeIn",
                      },
                    }}
                  >
                    <Button
                      href="/"
                      label="← Back to Hawkins"
                      variant="light"
                    />
                    <Button
                      onClick={() => setShowFloorPicker(!showFloorPicker)}
                      label={showFloorPicker ? "Cancel" : "Change floor"}
                      variant="light"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        duration: 1,
                        type: "tween",
                        ease: "easeOut",
                      },
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: 0.2,
                        type: "tween",
                        ease: "easeIn",
                      },
                    }}
                    className={styles.logo}
                  >
                    <Image
                      src="/assets/starcourt-mall-logo.svg"
                      alt="Starcourt Mall Logo"
                      width="819"
                      height="236"
                    />
                  </motion.div>

                  <FloorPicker
                    currentFloor={currentFloor}
                    setCurrentFloor={setCurrentFloor}
                    showPicker={showFloorPicker}
                    setShowPicker={setShowFloorPicker}
                  />
                  <motion.p
                    className={styles.floorNumber}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        duration: 1,
                        type: "tween",
                        ease: "easeOut",
                      },
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: 0.2,
                        type: "tween",
                        ease: "easeIn",
                      },
                    }}
                  >
                    Floor <span className={styles.number}>{currentFloor}</span>
                  </motion.p>

                  <TransformComponent
                    wrapperStyle={{
                      width: "100%",
                      height: "100vh",
                      position: "relative",
                    }}
                  >
                    <AnimatePresence>
                      {!showFloorPicker && (
                        <motion.div
                          className={styles.map}
                          style={
                            {
                              "--base-map-width": BASE_IMAGE_SIZE.width,
                              "--base-map-height": BASE_IMAGE_SIZE.height,
                              "--map-width": imageSize.width,
                              "--map-height": imageSize.height,
                              cursor: isPanning ? "grabbing" : "grab",
                            } as CSSProperties
                          }
                          initial={{
                            opacity: 0,
                          }}
                          animate={{
                            opacity: isImageReady ? 1 : 0,
                            transition: {
                              duration: 1,
                              type: "tween",
                              ease: "easeOut",
                            },
                          }}
                          exit={{
                            opacity: 0,
                            transition: {
                              duration: 0.35,
                              type: "tween",
                              ease: "easeIn",
                            },
                          }}
                        >
                          <Image
                            src={`/assets/starcourt-mall-floor-${currentFloor}.svg`}
                            alt="Starcourt Mall Blueprint"
                            width={imageSize.width}
                            height={imageSize.height}
                            useMap="#starcourtMallMap"
                            onLoad={() => setIsImageReady(true)}
                          />

                          {currentFloor === 1 && (
                            <div className={styles.locations}>
                              {locations.map((location) => {
                                const MIN_X = Math.min(
                                  ...location.coords.map((coords) => coords.x)
                                );
                                const MAX_X = Math.max(
                                  ...location.coords.map((coords) => coords.x)
                                );

                                const MIN_Y = Math.min(
                                  ...location.coords.map((coords) => coords.y)
                                );
                                const MAX_Y = Math.max(
                                  ...location.coords.map((coords) => coords.y)
                                );

                                const LOCATION_WIDTH = MAX_X - MIN_X;
                                const LOCATION_HEIGHT = MAX_Y - MIN_Y;

                                return (
                                  <Fragment key={`marker-${location.id}`}>
                                    <button
                                      aria-hidden="true"
                                      tabIndex={-1}
                                      onMouseOver={() =>
                                        setHighlightedMapArea(location.id)
                                      }
                                      onMouseLeave={() =>
                                        setHighlightedMapArea(null)
                                      }
                                      className={styles.location}
                                      style={
                                        {
                                          "--location-x": MIN_X,
                                          "--location-y": MIN_Y,
                                          "--location-width": LOCATION_WIDTH,
                                          "--location-height": LOCATION_HEIGHT,
                                          clipPath: `polygon(${location.coords
                                            .map(
                                              (coord) =>
                                                `${
                                                  ((coord.x - MIN_X) /
                                                    LOCATION_WIDTH) *
                                                  100
                                                }% ${
                                                  ((coord.y - MIN_Y) /
                                                    LOCATION_HEIGHT) *
                                                  100
                                                }%`
                                            )
                                            .join(", ")})`,
                                        } as CSSProperties
                                      }
                                    />

                                    <AnimatedText
                                      mapArea={highlightedMapArea}
                                    />
                                  </Fragment>
                                );
                              })}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </TransformComponent>
                </Fragment>
              )}
            </TransformWrapper>
          </div>
        </main>
      </AnimatePresence>
    </>
  );
}
