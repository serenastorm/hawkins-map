export const filterAnimation = {
  container: {
    initial: { x: "100%" },
    animate: {
      x: 0,
      transition: { duration: 0.5, type: "tween", ease: "easeOut" },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.2, type: "tween", ease: "easeIn" },
    },
  },
};
