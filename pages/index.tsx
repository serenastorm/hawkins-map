import { useEffect, useState, useRef, Fragment } from "react";
import Image from "next/image";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { locations, LOCATION_TYPES } from "constants/locations";
import {
  Filters,
  MapPin,
  MapTooltip,
  OpeningTitle,
  ZoomControls,
} from "components";
import { roundNumber } from "infrastructure/utils/roundNumber";

import type { LocationType } from "constants/locations";
import type { AriaAttributes, CSSProperties, KeyboardEvent } from "react";
import type { NextPage } from "next";

import styles from "styles/Home.module.scss";

const Home: NextPage = () => {
  const BASE_MAP_SIZE = { width: 1512, height: 1700 };
  const [scale, setScale] = useState<number>(1);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [visibleMapPin, setVisibleMapPin] = useState<string | null>(null);
  const [isImageReady, setIsImageReady] = useState<boolean>(false);
  const [showConfirmedLocationsOnly, setShowConfirmedLocationsOnly] =
    useState<boolean>(false);
  const [visibleLocationTypes, setVisibleLocationTypes] = useState<
    LocationType[]
  >(LOCATION_TYPES.map((locationType) => locationType.label));
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const tabsRefs = useRef<Array<HTMLButtonElement | HTMLAnchorElement | null>>(
    []
  );

  const visibleCategories = LOCATION_TYPES.filter((locationType) =>
    visibleLocationTypes.includes(locationType.label)
  )
    .map((locationType) => locationType.categories)
    .flat();

  const VISIBLE_LOCATIONS = locations.filter(
    (location) =>
      visibleCategories.includes(location.category) &&
      (!showConfirmedLocationsOnly || location.status !== "maybe")
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const IS_MOBILE = windowSize.width && windowSize.width < 600;
  const MIN_SCALE = 1;
  const MAX_SCALE = 3;
  const WHEEL_STEP = 0.2;

  const PIN_SCALE = 100 / (100 * scale);

  const totalTabs = VISIBLE_LOCATIONS.length;

  const activateTab = (newTabIndex: number | null) => {
    const newTabId =
      newTabIndex || newTabIndex === 0
        ? VISIBLE_LOCATIONS[newTabIndex].id
        : null;

    /* Set new tab as active */
    setVisibleMapPin(newTabId);

    if (newTabIndex || newTabIndex === 0) {
      /* Focus new tab button */
      tabsRefs?.current[newTabIndex]?.focus();
    }
  };

  const onKeyPressed = (
    event: KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>,
    tabIndex: number
  ) => {
    const shouldGoToNextTab = event.key === "ArrowRight";
    const shouldGoToPreviousTab = event.key === "ArrowLeft";
    const shouldGoToFirstTab = event.key === "Home";
    const shouldGoToLastTab = event.key === "End";

    const prevTab = tabIndex - 1;
    const nextTab = tabIndex + 1;
    const lastTab = totalTabs - 1;

    if (shouldGoToNextTab) {
      if (tabIndex >= totalTabs - 1) {
        activateTab(0);
      } else {
        activateTab(nextTab);
      }
    } else if (shouldGoToPreviousTab) {
      if (tabIndex <= 0) {
        activateTab(lastTab);
      } else {
        activateTab(prevTab);
      }
    } else if (shouldGoToFirstTab) {
      activateTab(0);
    } else if (shouldGoToLastTab) {
      activateTab(lastTab);
    } else {
      return null;
    }
  };

  const getButtonProps = (id: string) => {
    const tabIndex = VISIBLE_LOCATIONS.findIndex(
      (location) => location.id === id
    );

    return {
      role: "tab",
      "aria-selected":
        id === visibleMapPin
          ? "true"
          : ("false" as AriaAttributes["aria-selected"]),
      "aria-controls": `${id}-tab`,
      id: `${id}-tab-control`,
      tabIndex: id === visibleMapPin ? 0 : -1,
      ref: (el: HTMLButtonElement | HTMLAnchorElement) =>
        (tabsRefs.current[tabIndex] = el),
      onKeyDown: (
        event: KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
      ) => onKeyPressed(event, tabIndex),
    };
  };

  return (
    <>
      <Head>
        <title>Hawkins Map</title>
        <meta
          name="description"
          content="Interactive map of Hawkins, Indiana"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AnimatePresence>
        <main>
          <OpeningTitle />

          <div>
            <TransformWrapper
              key="hawkins-map"
              initialScale={scale}
              maxScale={MAX_SCALE}
              onPanningStart={() => {
                setIsPanning(true);

                if (IS_MOBILE) {
                  setShowFilters(false);
                  setVisibleMapPin(null);
                }
              }}
              onPanningStop={() => setIsPanning(false)}
              onZoomStop={(event) => setScale(event.state.scale)}
              wheel={{ step: WHEEL_STEP }}
              pinch={{ step: WHEEL_STEP }}
              doubleClick={{ step: WHEEL_STEP }}
              limitToBounds
            >
              {({ zoomIn, zoomOut, zoomToElement }) => (
                <Fragment>
                  <Filters
                    visibleLocationTypes={visibleLocationTypes}
                    setVisibleLocationTypes={setVisibleLocationTypes}
                    showConfirmedLocationsOnly={showConfirmedLocationsOnly}
                    setShowConfirmedLocationsOnly={
                      setShowConfirmedLocationsOnly
                    }
                    showFilters={showFilters}
                    setShowFilters={setShowFilters}
                  />

                  <ZoomControls
                    zoomIn={() => {
                      setScale(
                        scale > MAX_SCALE - WHEEL_STEP
                          ? MAX_SCALE
                          : roundNumber(scale + WHEEL_STEP)
                      );
                      zoomIn(WHEEL_STEP);
                    }}
                    zoomOut={() => {
                      setScale(
                        scale < MIN_SCALE + WHEEL_STEP
                          ? MIN_SCALE
                          : roundNumber(scale - WHEEL_STEP)
                      );
                      zoomOut(WHEEL_STEP);
                    }}
                  />

                  {VISIBLE_LOCATIONS.map((location) => (
                    <MapTooltip
                      key={`tooltip-${location.id}`}
                      controlledVisible={visibleMapPin === location.id}
                      {...location}
                    />
                  ))}
                  <TransformComponent
                    wrapperStyle={{
                      width: "100%",
                      height: "100vh",
                      position: "relative",
                    }}
                  >
                    <AnimatePresence>
                      <motion.div
                        className={styles.map}
                        style={
                          {
                            "--base-map-width": BASE_MAP_SIZE.width,
                            "--base-map-height": BASE_MAP_SIZE.height,
                            "--pin-scale": PIN_SCALE < 0.3 ? 0.3 : PIN_SCALE,
                            cursor: isPanning ? "grabbing" : "grab",
                          } as CSSProperties
                        }
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: isImageReady ? 1 : 0,
                          transition: {
                            duration: 0.75,
                            type: "tween",
                            ease: "easeOut",
                          },
                        }}
                        exit={{
                          opacity: 0,
                          transition: {
                            duration: 0.5,
                            type: "tween",
                            ease: "easeIn",
                          },
                        }}
                      >
                        <Image
                          src="/assets/map.jpg"
                          alt="Map of Hawkins"
                          width={BASE_MAP_SIZE.width}
                          height={BASE_MAP_SIZE.height}
                          onLoad={() => setIsImageReady(true)}
                        />

                        {VISIBLE_LOCATIONS.map((location, locationIndex) => (
                          <MapPin
                            key={location.id}
                            controlledVisible={visibleMapPin === location.id}
                            setControlledVisible={(isVisible: boolean) => {
                              activateTab(isVisible ? locationIndex : null);

                              if (isVisible) {
                                setShowFilters(false);
                              }
                            }}
                            zoomIn={() => {
                              const NEW_SCALE =
                                scale > 1 ? scale : IS_MOBILE ? 1.5 : 1.2;
                              zoomToElement(
                                `${location.id}-tab-control`,
                                NEW_SCALE
                              );
                              setScale(NEW_SCALE);
                            }}
                            isSecondary={
                              visibleMapPin
                                ? visibleMapPin !== location.id
                                : false
                            }
                            buttonProps={getButtonProps(location.id)}
                            {...location}
                          />
                        ))}
                      </motion.div>
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
};

export default Home;
