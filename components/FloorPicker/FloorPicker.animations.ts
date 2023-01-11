export const floorPickerAnimation = {
  container: {
    initial: { y: "100%" },
    animate: {
      y: 0,
      transition: { duration: 0.5, type: "tween", ease: "easeOut" },
    },
    exit: {
      y: "100%",
      transition: { duration: 0.2, type: "tween", ease: "easeIn" },
    },
  },
};
